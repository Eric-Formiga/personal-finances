import { ReactNode } from "react"
import { useAppSelector } from "../redux/hooks"
import  Loading  from "../components/Loading"
import { Navigate } from "react-router-dom"

type Props = {
    children: ReactNode
}

export const AuthMiddleware = ({ children }: Props) => {
    const { authStatus } = useAppSelector(state => state.auth)

    if (authStatus === 'authenticated') {
        return children
    }

    if (authStatus === 'not_verified') {
        return <Loading />
    }

    return <Navigate to='/signin' />
}