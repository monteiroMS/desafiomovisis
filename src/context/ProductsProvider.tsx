import { createContext, useState } from 'react';
import { Product, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {};

const ProductsContext = createContext(INITIAL_VALUE);

const ProductsProvider = ({ children }: ReactChildren) => {
  const [products, setProducts] = useState<Product[]>([]);

  const contextValue = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={ contextValue }>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;