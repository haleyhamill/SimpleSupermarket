import React, { createContext } from "react";

const context = createContext();

function AppProvider(props) {
    const [cart, setCart] = useState();

    function handleProductDelete(id) {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
    }

    function handleProductAdd(newProduct) {
        // check if item exists
        const existingProduct = cart.find(
            (product) => product.id === newProduct.id
        );
        if (existingProduct) {
            // increase quantity
            const updatedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
            setCart(updatedCart);
        } else {
            // product is new to the cart
            setCart([
                ...cart,
                {
                    ...newProduct,
                    quantity: 1,
                },
            ]);
        }
    }

    const value = {
        cart: cart,
        onProductAdd: handleProductAdd,
        onProductDelete: handleProductDelete,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}