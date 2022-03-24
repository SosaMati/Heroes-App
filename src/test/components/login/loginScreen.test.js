import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';


import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from '../../../types/types';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));
 

describe('Pruebas en LoginScreen', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/login'] }>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {

        const handleClick = wrapper.find('button').prop('onClick'); //funcion hacer click
        handleClick(); //hacemos click

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Matías' }
        }); //esperamos que estemos logeados 

        expect( mockNavigate ).toHaveBeenCalledWith("/", { replace:  true }); //esperamos que se vea el home

        localStorage.setItem('lastPath', '/dc'); //ultima página vista /dc
        handleClick(); //hacemos click

        expect( mockNavigate ).toHaveBeenCalledWith("/dc", { replace:  true }); //esperamos que la navegacion este en /dc


    });
})