import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

interface AuthContextType {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
}

interface AuthProps {
    children: React.ReactElement;
}

const AuthContext = createContext<AuthContextType>({
    isLogin: false,
    login: () => {},
    logout: () => {},
});
export default AuthContext;

export const AuthProvider = ({ children }: AuthProps) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = useCallback(() => {
        setIsLogin(true);
    }, []);
    const logout = useCallback(() => {
        fetch(
            'https://web.ics.purdue.edu/~skroot/cgt-390/public/final/logout.php'
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setIsLogin(false);
                } else {
                    console.log(data);
                }
            })
            .catch((error) => console.log(error));
    }, []);
    const value = useMemo<AuthContextType>(
        () => ({ isLogin, login, logout }),
        [isLogin, login, logout]
    );
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
