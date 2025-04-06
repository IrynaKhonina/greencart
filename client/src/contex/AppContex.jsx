import React, {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {dummyProducts} from "../assets/assets.js";
import toast from "react-hot-toast";

// Создаем контекст
export const AppContext = createContext();

// Провайдер контекста
export const AppContextProvider = ({children}) => {

    const currency = import.meta.VITE_CURRENCY

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState({});

    //Fetch All Products
    const fetchProducts = async () => {
        setProducts(dummyProducts);
    }


    //Add Product to Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1

        }
        setCartItems(cartData);
        toast.success("Added to Cart");
    }

    // Update Cart Item Quantity
    const updateCartItems = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    }

    // Remove Product from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        toast.success("Removed from Cart");
        setCartItems(cartData);

    }


    useEffect(() => {
        fetchProducts();
    }, [])

    // Передаем все значения в контекст
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        setProducts,
        currency,
        addToCart,
        updateCartItems,
        removeFromCart,
        cartItems
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