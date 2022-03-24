import { useContext } from "react";
import { Navigate } from "react-router-dom"; //Componente que me permite navergar a la ruta que yo quiera
import { AuthContext } from "../auth/authContext";


export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return user.logged
    ? <Navigate to='/' />
    : children
}
  