import { createContext, useState } from 'react';
import { Product, ProductContextType, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {
  products: [{
    id: '0',
    name: 'Digite na barra de busca o produto que você procura',
    entryDate: new Date(),
    img: '',
    price: 0,
  }],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
};

export const ProductsContext = createContext<ProductContextType>(INITIAL_VALUE);

const ProductsProvider = ({ children }: ReactChildren) => {
  const STATE_INITIAL_VALUE = INITIAL_VALUE.products;
  const [products, setProducts] = useState<Product[]>(STATE_INITIAL_VALUE);
  const [loading, setLoading] = useState<Boolean>(false);

  const contextValue = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return (
    <ProductsContext.Provider value={ contextValue }>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;