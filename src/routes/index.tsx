import { Route, Routes } from "react-router-dom"
import { Auth } from "../pages/Auth"
import { Navbar } from "../components/Layout/Navbar"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/signin"
                element={<Auth type="signin" />}
            />

            <Route
                path="/signup"
                element={<Auth type="signup" />}
            />

            <Route
                index
                element={<Navbar />}
            />
        </Routes>
    )
}