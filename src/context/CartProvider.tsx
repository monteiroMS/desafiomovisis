import { useState, createContext } from 'react';
import { EMPTY_CART } from '../helpers/localStorageAPI';
import { CartContextType, InCartProduct, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {
  cart: EMPTY_CART,
  setCart: () => {},
  purchaseStatus: 'in-progress',
  setPurchaseStatus: () => {},
  loading: false,
  setLoading: () => {},
};

export const CartContext = createContext<CartContextType>(INITIAL_VALUE);

const CartProvider = ({ children }: ReactChildren) => {
  const [cart, setCart] = useState<InCartProduct[]>(INITIAL_VALUE.cart);
  const [purchaseStatus, setPurchaseStatus] = useState<string>(INITIAL_VALUE.purchaseStatus);
  const [loading, setLoading] = useState<boolean>(INITIAL_VALUE.loading);

  const contextValue = {
    cart,
    setCart,
    purchaseStatus,
    setPurchaseStatus,
    loading,
    setLoading,
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};

export default CartProvider;