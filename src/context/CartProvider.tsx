import { useState, createContext } from 'react';
import { Product, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {};

const CartContext = createContext(INITIAL_VALUE);

const CartProvider = ({ children }: ReactChildren) => {
  const [cart, setCart] = useState<Product[]>([]);

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