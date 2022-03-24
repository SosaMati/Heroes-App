import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const action={
            type: types.login,
            payload: { name: 'Matías' }
        }

        dispatch( action );

        const lastPath = localStorage.getItem( 'lastPath' ) || '/';


        navigate(lastPath, { 
            replace: true
        }); //cuando hacemos login va a la ultipa pagina visitada, y cuando queremos retroceder no vuelve a login, lo saltea 
    }


    return (
        <div className=" container mt-5">
            <h1>Login</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                Login
            </button>

        </div>
    )
}

