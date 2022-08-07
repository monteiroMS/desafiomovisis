import { Product } from "./types";

export const getProduct = async (query: string) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const PRODUCTS_LIMIT = 5;

  try {
    const response = await fetch(URL);
    const { results } = await response.json();

    const firstFive = results.filter((_product: any, index: number) => index < PRODUCTS_LIMIT);
    const products: Product[] = firstFive.map((product: any): Product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      entryDate: new Date(),
      img: product.thumbnail,
    }));
    
    return products;
  } catch (error: any) {
    console.log(`Erro: ${error.message}`);
    return [];
  }
  
};
