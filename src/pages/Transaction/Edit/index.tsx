import { useEffect, useState } from "react"
import { TransactionStatus } from "../../../@types/Transaction"
import { useTheme } from "styled-components"
import { getTransaction, updateTransaction } from "../../../services/requests"
import { Body, Container, Footer, Header, HeaderInfo, HeaderSubtitle, HeaderTitle, Loading } from "./styles"
import Alert from "../../../components/Alert"
import { ScaleLoader } from "react-spinners"
import TextInput from "../../../components/TextInput"
import SelectInput from "../../../components/SelectInput"
import { Button } from "../../../components/Button"
import { useNavigate, useParams } from "react-router-dom"

export const EditTransaction = () => {
    const [loadingRequest, setLoadingRequest] = useState(true)
    const [titleValue, setTitleValue] = useState('')
    const [amountValue, setAmountValue] = useState('')
    const [statusValue, setStatusValue] = useState<TransactionStatus>('pending')
    const [showAlert, setShowAlert] = useState({ type: "error", message: "", show: false })

    const theme = useTheme()
    const { id } = useParams()
    const navigate = useNavigate()

    const handleOnClick = async () => {
        const [title, amount, status] = [titleValue, amountValue, statusValue]

        if (!title || !amount || !status) {
            setShowAlert({ type: "error", message: "Preencha todos os campos!", show: true });
            return;
        }

        const amountUSD = Number(amount.replace('.', '').replace(',', '.'))

        setLoadingRequest(true)
        const request = await updateTransaction(Number(id), title, amountUSD, status)
        setLoadingRequest(false)

        if (request.error) {
            setShowAlert({ type: "error", message: request.error, show: true })
        } else {
            setShowAlert({ type: "success", message: "Transação editada com sucesso!", show: true })
        }
    }

    const handleGetTransaction = async () => {
        const request = await getTransaction(Number(id))
        const transaction = request.data?.transaction

        if (request.error) {
            navigate('/transacoes/nova')
            return;
        }

        if (transaction) {
            const amountBRL = Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(transaction.amount)

            setTitleValue(transaction.title)
            setAmountValue(amountBRL)
            setStatusValue(transaction.status)
            setLoadingRequest(false)
        }
    }

    useEffect(() => {
        handleGetTransaction()
    }, [])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>Editar transação</HeaderTitle>
                    <HeaderSubtitle>Edite uma transação, preencha os campos abaixo e clique em salvar!</HeaderSubtitle>
                </HeaderInfo>
            </Header>

            <Alert
                type={showAlert.type}
                title={showAlert.message}
                show={showAlert.show}
                setShow={show => setShowAlert({ ...showAlert, show })}
            />

            {loadingRequest &&
                <Loading>
                    <ScaleLoader color={theme.COLORS.primary} />
                </Loading>
            }

            {!loadingRequest &&
                <>
                    <Body>
                        <TextInput
                            label="Título da transação"
                            placeholder="Ex: Salário"
                            value={titleValue}
                            onChange={e => setTitleValue(e.target.value)}
                            borderRadius="sm"
                        />

                        <TextInput
                            label="Valor"
                            placeholder="Ex: 1.000,00 ou -1.000,00"
                            value={amountValue}
                            onChange={e => setAmountValue(e.target.value)}
                            borderRadius="sm"
                        />

                        <SelectInput
                            label="Status"
                            options={[{ label: "Pendente", value: 'pending' }, { label: 'Concluído', value: 'completed' }]}
                            value={statusValue}
                            onChange={e => setStatusValue(e.target.value as TransactionStatus)}
                        />
                    </Body>

                    <Footer>
                        <Button onClick={handleOnClick} size="md" width="110px">
                            Salvar
                        </Button>
                    </Footer>
                </>
            }
        </Container>
    )
}