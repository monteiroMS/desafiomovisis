import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import * as Styled from './styles';

const PriceFilter = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [from, setFrom] = useState<string>('');
  const [until, setUntil] = useState<string>('');

  const handleInput = ({ target: { name, value } }: any) => {
    if (name === 'from-input') {
      setFrom(value);
    } else {
      setUntil(value);
    }
  };

  const handleFilter = (from: string, until: string) => {
    const filteredProducts = products
      .filter(({ price }) => price >= Number(from) && price <= Number(until));
    setProducts(filteredProducts);
    setFrom('');
    setUntil('');
  };

  return (
    <Styled.Container>
      <h4>Filtrar por preço</h4>
      <label htmlFor="from-input">
        De:
        <input
          type="number"
          id="from-input"
          name="from-input"
          placeholder="R$ 0,00"
          value={ from }
          onChange={ handleInput }
        />
      </label>
      <label htmlFor="until-input">
        Até:
        <input
          type="number"
          id="until-input"
          name="until-input"
          placeholder="R$ 0,00"
          value={ until }
          onChange={ handleInput }
        />
      </label>
      <button
        type="button"
        onClick={ () => handleFilter(from, until) }
      >
        Filtrar
      </button>
    </Styled.Container>
  );
};

export default PriceFilter;
