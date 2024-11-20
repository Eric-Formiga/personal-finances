import { useEffect, useState } from "react"
import { Transaction } from "../../../@types/Transaction"
import { useTheme } from "styled-components"
import { useNavigate } from "react-router-dom"
import { deleteTransaction, getTransactions } from "../../../services/requests"
import { Body, Container, Empty, EmptyIcon, EmptyLabel, Header, HeaderInfo, HeaderSearch, HeaderSearchIcon, HeaderSearchInput, HeaderSubtitle, HeaderTitle, Loading, Pagination, PaginationItem } from "./styles"
import TextInput from "../../../components/TextInput"
import { Button } from "../../../components/Button"
import Alert from "../../../components/Alert"
import { ScaleLoader } from "react-spinners"
import { TransactionsTable } from "../../../components/TransactionsTable"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

export const Transactions = () => {
    const [loadingRequest, setLoadingRequest] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [showAlert, setShowAlert] = useState({ type: "error", message: "", show: false })
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [transactionsFiltered, setTransactionsFiltered] = useState<Transaction[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const theme = useTheme()
    const navigate = useNavigate()

    const handleGetTransactions = async () => {
        setLoadingRequest(true)
        const request = await getTransactions(currentPage)
        setLoadingRequest(false)

        if (request.data) {
            if (!searchValue) setTransactionsFiltered(request.data.transactions.items)

            setTransactions(request.data.transactions.items)
            setTotalPages(request.data.transactions.pageTotal)
        }

        if (request.error) {
            setShowAlert({ type: "error", message: request.error, show: true })
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handleSearch = () => {
        setTransactionsFiltered(transactions.filter(transaction => transaction.title.toLowerCase().includes(searchValue.toLowerCase())))
    }

    const handleEditTransaction = (id: number) => navigate(`/transacoes/${id}/editar`)

    const handleDeleteTransaction = async (id: number) => {
        if (window.confirm("Tem certeza que deseja excluir esta transação?")) {
            setLoadingRequest(true)
            await deleteTransaction(id)
            await handleGetTransactions()
            setLoadingRequest(false)

            setShowAlert({ type: "success", message: "Transação excluída com sucesso!", show: true })
        }
    }

    useEffect(() => {
        handleGetTransactions()
    }, [currentPage])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>Transações</HeaderTitle>
                    <HeaderSubtitle>Consulte e gerencie todas as suas transações e filtre sua busca por título!</HeaderSubtitle>
                </HeaderInfo>

                <HeaderSearch>
                    <HeaderSearchInput>
                        <TextInput
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder="Pesquisar por..."
                        />
                    </HeaderSearchInput>

                    <Button
                        onClick={handleSearch}
                        borderRadius="rounded"
                    >
                        <HeaderSearchIcon />
                    </Button>
                </HeaderSearch>
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
                <Body>
                    {transactionsFiltered.length === 0 ?
                        <Empty>
                            <EmptyIcon />
                            <EmptyLabel>
                                Nenhuma transação encontrada
                            </EmptyLabel>
                        </Empty>
                        :
                        <>
                            <TransactionsTable
                                data={transactionsFiltered}
                                onEdit={handleEditTransaction}
                                onDelete={handleDeleteTransaction}
                            />

                            <Pagination>
                                <PaginationItem $isLeft onClick={handlePreviousPage}>
                                    <MdOutlineKeyboardArrowLeft size={21} />
                                </PaginationItem>

                                {[...Array(totalPages)].map((_, index) => (
                                    <PaginationItem
                                        key={index}
                                        $active={index + 1 === currentPage}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </PaginationItem>
                                ))}

                                <PaginationItem $isRight onClick={handleNextPage}>
                                    <MdOutlineKeyboardArrowRight size={21} />
                                </PaginationItem>
                            </Pagination>
                        </>
                    }
                </Body>
            }
        </Container>
    )
}