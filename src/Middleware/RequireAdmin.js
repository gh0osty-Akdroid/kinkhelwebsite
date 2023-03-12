import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTokenSuccess } from "../action/Token";
import { TokenUrl } from "../Url";


const RequireAdmin = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(p => p?.authToken?.authToken)

    useEffect(() => {
        if (token) {
            TokenUrl().get('/verify').catch((err) => {
                if (err?.response?.status === 401) {
                    navigate('/login')
                    dispatch(fetchTokenSuccess(null))
                }
            }).then((res) => null)
        } else {
            navigate('/login')
            dispatch(fetchTokenSuccess(null))
        }
    }, [])

    return (
        token !== (null || undefined) ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default RequireAdmin;