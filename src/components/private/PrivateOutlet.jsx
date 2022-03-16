import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function PrivateOutlet() {
    const isAuth = useAuth()

    return isAuth ? <Outlet /> : <Navigate to="/home" />
}
