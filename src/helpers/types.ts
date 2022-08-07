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

export type ProductCardType = {
  key: string,
  name: string,
  price: number,
  img: string,
}

export type ProductContextType = {
  products: Product[],
  setProducts: (newState: Product[]) => void,
  loading: Boolean,
  setLoading: (newState: Boolean) => void,
  query: string,
  setQuery: (newState: string) => void,
};
