import { Product } from "./types";

export const sortByBiggerPrice = (a: Product, b: Product) => b.price - a.price;

export const sortBySmallerPrice = (a: Product, b: Product) => a.price - b.price;

export const sortByNewerDate = (a: Product, b: Product) => b.entryDate.getTime() - a.entryDate.getTime();

export const sortByOlderDate = (a: Product, b: Product) => a.entryDate.getTime() - b.entryDate.getTime();