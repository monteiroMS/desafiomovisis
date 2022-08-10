import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import { Product } from '../../helpers/types';
import Loading from '../Loading';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

const Products = () => {
  const { products, loading, query } = useContext(ProductsContext);

  if (loading) return <Loading />;

  if (!products.length || products[0].id === '0') {
    return (
      <Styled.Container>
        <h3>Digite na barra de busca o produto que você procura</h3>
      </Styled.Container>
    );
  } 

  return (
    <Styled.Container>
      <h2>{ `Exibindo resultados para sua busca por: ${query}` }</h2>
      <div className="product-cards-container">{
        products.map((product: Product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))
      }</div>
    </Styled.Container>
  );
};

export default Products;