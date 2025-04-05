import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router";

// Создаем контекст
export const AppContext = createContext();

// Провайдер контекста
export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const [isSeller, setIsSeller] = React.useState(false);
    const [showUserLogin, setShowUserLogin] = React.useState(false);

    // Передаем все значения в контекст
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Хук для удобного использования контекста
export const useAppContext = () => {
    return useContext(AppContext);
};