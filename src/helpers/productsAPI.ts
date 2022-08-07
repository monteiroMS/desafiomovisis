import { Product } from "./types";

export const getProduct = async (query: string) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  try {
    const response = await fetch(URL);
    const { results } = await response.json();
    
    const products: Product[] = results.map((product: any): Product => ({
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
