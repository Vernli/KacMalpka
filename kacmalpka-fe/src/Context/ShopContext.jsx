import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    // Product Cart
    const addToCart = (product) => {

        const newItem = {...product, amount: 1}
        const cartItem = cart.find((item) =>  item.id === product.id )

        if(cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === product.id) {
                    return {...item, amount: cartItem.amount +1}
                }
                else {
                    return item;
                }
            })
            setCart(newCart);
        }
        else { 
            
            setCart([...cart, newItem])
        }};
    const removeFromCart = (product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        const newCart = [...cart].map((item) => {
            if (cartItem.amount > 1 && item.id === product.id) {
                return {...item, amount: cartItem.amount -1}
            }
            else {
                if (item.id === product.id)
                    return null;
                return {...item};
            }
        }).filter(Boolean);
        setCart(newCart)
    }
    
    return <ShopContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</ShopContext.Provider>
}

