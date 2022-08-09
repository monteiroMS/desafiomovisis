import { ReactNode } from "react";

export type ReactChildren = {
  children: ReactNode;
};

export type Product = {
  id: string,
  name: string,
  price: number,
  entryDate: Date,
  img: string,
}

export type InCartProduct = {
  id: string,
  name: string,
  price: number,
  entryDate: Date,
  img: string,
  quantity: number,
}

export type ProductPropType = {
  key: string,
  product: Product,
}

export type ProductContextType = {
  products: Product[],
  setProducts: (newState: Product[]) => void,
  loading: Boolean,
  setLoading: (newState: Boolean) => void,
  query: string,
  setQuery: (newState: string) => void,
};

export type CartContextType = {
  cart: InCartProduct[],
  setCart: (newState: InCartProduct[]) => void,
  purchaseStatus: string,
  setPurchaseStatus: (newState: string) => void,
  loading: boolean,
  setLoading: (newState: boolean) => void,
};

export type PriceFiltersType = {
  from: string,
  until: string,
};

export type SortFiltersType = {
  price: string,
  date: string,
};

export type InCartProductPropType = {
  key: string,
  product: InCartProduct,
};
