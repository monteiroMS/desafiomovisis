import { Product } from "./types";

const entryDates: Date[] = [
  new Date('2020-12-25'),
  new Date('2021-07-08'),
  new Date('2019-06-25'),
  new Date('2020-11-01'),
  new Date('2021-02-17'),
];

export const getProduct = async (query: string) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const PRODUCTS_LIMIT = 5;

  try {
    const response = await fetch(URL);
    const { results } = await response.json();

    const firstFive = results.filter((_product: any, index: number) => index < PRODUCTS_LIMIT);
    const products: Product[] = firstFive.map((product: any, index: number): Product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      entryDate: entryDates[index],
      img: product.thumbnail,
    }));
    
    return products;
  } catch (error: any) {
    console.log(`Erro: ${error.message}`);
    return [];
  }
  
};
