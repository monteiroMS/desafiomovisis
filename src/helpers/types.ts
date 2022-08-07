import { ReactNode } from "react";

export type ReactChildren = {
  children: ReactNode;
};

export type Product = {
  name: string,
  price: string,
  entryDate: Date,
  img: string,
}
