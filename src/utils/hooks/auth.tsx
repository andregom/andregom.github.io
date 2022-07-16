import { createContext, useContext, useState } from "react";
import { MdPassword } from "react-icons/md";

interface IAuthContextProps {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);
 
const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        console.log(isLogged)
        return !! isLogged;
    });

    const signIn = (email: string, password: string) => {
        console.log(email, password)
        if (email == 'andre@email.com' && password == '123') {
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContextProps {
    const context = useContext(AuthContext);

    return context;
}
 
export { AuthProvider, useAuth };