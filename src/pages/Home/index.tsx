import { ChangeEvent, useEffect, useState } from "react"
import { useTheme } from "styled-components"
import { getDashboard } from "../../services/requests"
import { Body, BodyRow, Container, Header, HeaderFilter, HeaderInfo, HeaderSubtitle, HeaderTitle, InformationCard, InformationCardContent, InformationCardContentLabel, InformationCardContentValue, Loading, NewTransactionCard, NewTransactionCardLabel } from "./styles"
import SelectInput from "../../components/SelectInput"
import { ScaleLoader } from "react-spinners"
import { FcBullish, FcCancel, FcOk } from "react-icons/fc"
import { formatValue } from "../../utils/formatValue"
import { Button } from "../../components/Button"
import { MdAdd } from "react-icons/md"

export const Home = () => {
    const [loadingRequest, setLoadingRequest] = useState(true)
    const [monthSelected, setMonthSelected] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'))
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear().toString())
    const [dataDashboard, setDataDashboard] = useState({
        balance: 0,
        pending_transactions: 0,
        completed_transactions: 0
    })

    const theme = useTheme()

    const handleMonthSelected = (e: ChangeEvent<HTMLSelectElement>) => setMonthSelected(e.target.value)
    const handleYearSelected = (e: ChangeEvent<HTMLSelectElement>) => setYearSelected(e.target.value)

    const getYears = () => {
        const years = [];

        for (let year = 2024; year <= new Date().getFullYear(); year++) {
            years.push({ label: year.toString(), value: year.toString() })
        }

        return years;
    }

    const getMonths = () => {
        const monthsArray = Array.from({ length: 12 }, (_, index) => {
            const date = new Date(new Date().getFullYear(), index, 1)
            return {
                value: (index + 1).toString().padStart(2, '0'),
                label: date.toLocaleString('pt-BR', { month: 'long' })
            }
        })

        return monthsArray;
    }

    const handleGetDashboard = async () => {
        setLoadingRequest(true)
        const response = await getDashboard(monthSelected, yearSelected)
        setLoadingRequest(false)
        setDataDashboard(response)
    }

    useEffect(() => {
        handleGetDashboard()
    }, [monthSelected, yearSelected])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>Meu saldo</HeaderTitle>
                    <HeaderSubtitle>Acompanhe seu saldo e filtre por mês e ano com facilidade!</HeaderSubtitle>
                </HeaderInfo>

                <HeaderFilter>
                    <SelectInput
                        value={monthSelected}
                        options={getMonths()}
                        onChange={handleMonthSelected}
                    />

                    <SelectInput
                        value={yearSelected}
                        options={getYears()}
                        onChange={handleYearSelected}
                    />
                </HeaderFilter>
            </Header>

            {loadingRequest &&
                <Loading>
                    <ScaleLoader color={theme.COLORS.primary} />
                </Loading>
            }

            {!loadingRequest &&
                <Body>
                    <BodyRow>
                        <InformationCard>
                            <FcBullish size={32} />

                            <InformationCardContent>
                                <InformationCardContentValue
                                    style={{ color: dataDashboard.balance >= 0 ? theme.COLORS.success : theme.COLORS.danger }}
                                >
                                    {formatValue(dataDashboard.balance)}
                                </InformationCardContentValue>

                                <InformationCardContentLabel>
                                    Saldo total atual no mês!
                                </InformationCardContentLabel>
                            </InformationCardContent>
                        </InformationCard>

                        <InformationCard>
                            <FcCancel size={32} />

                            <InformationCardContent>
                                <InformationCardContentValue>
                                    {dataDashboard.pending_transactions}
                                </InformationCardContentValue>

                                <InformationCardContentLabel>
                                    Transações pendentes!
                                </InformationCardContentLabel>
                            </InformationCardContent>
                        </InformationCard>

                        <InformationCard>
                            <FcOk size={32} />

                            <InformationCardContent>
                                <InformationCardContentValue>
                                    {dataDashboard.completed_transactions}
                                </InformationCardContentValue>

                                <InformationCardContentLabel>
                                    Transações concluídas!
                                </InformationCardContentLabel>
                            </InformationCardContent>
                        </InformationCard>
                    </BodyRow>

                    <BodyRow style={{ marginTop: 30 }}>
                        <NewTransactionCard to="/transacoes/nova">
                            <Button borderRadius="rounded">
                                <MdAdd size={21} />
                            </Button>

                            <NewTransactionCardLabel>
                                Criar nova transação
                            </NewTransactionCardLabel>
                        </NewTransactionCard>
                    </BodyRow>
                </Body>
            }
        </Container>
    )
}