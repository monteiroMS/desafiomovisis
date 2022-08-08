import { useState, createContext } from 'react';
import { CartContextType, InCartProduct, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<CartContextType>(INITIAL_VALUE);

const CartProvider = ({ children }: ReactChildren) => {
  const [cart, setCart] = useState<InCartProduct[]>(INITIAL_VALUE.cart);

  const contextValue = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};

export default CartProvider;