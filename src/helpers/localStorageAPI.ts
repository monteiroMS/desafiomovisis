import { InCartProduct } from "./types";

const CART_KEY = 'cart';

export const EMPTY_CART = [{
  id: '',
  name: 'empty-cart',
  price: 0,
  entryDate: new Date(),
  img: '',
  quantity: 0,
}];

if (!localStorage.getItem(CART_KEY)) {
  localStorage.setItem(CART_KEY, JSON.stringify(EMPTY_CART));
}

export const saveOnLocalStorage = (newCart: InCartProduct[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(newCart));
};

export const clearLocalStorage = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(EMPTY_CART));
};

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  if (cart) return JSON.parse(cart);
  return null;
};

export const localStorageCartIsEmpty = () => {
  const [firstProduct] = getCart();
  return firstProduct.name === 'empty-cart';
};
