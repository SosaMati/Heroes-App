import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"; //Componente que me permite navergar a la ruta que yo quiera
import { AuthContext } from "../auth/authContext";


export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const { pathname, search } = useLocation(); //muestra la ultima url navegada
    localStorage.setItem("lastPath", pathname + search); //guardamos en el localStorage la ultima url visitada

  
    return user.logged
    ? children 
    : <Navigate to='/login' />
}
