import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import { sortByBiggerPrice, sortByNewerDate, sortByOlderDate, sortBySmallerPrice } from '../../helpers/sortFunctions';
import * as Styled from './styles';

const SortFilter = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const handleFilter = ({ target: { value } }: any) => {
    switch (value) {
      case 'bigger-price':
        setProducts([...products.sort(sortByBiggerPrice)]);
        break;
      case 'smaller-price':
        setProducts([...products.sort(sortBySmallerPrice)]);
        break;
      case 'newer-date':        
        setProducts([...products.sort(sortByNewerDate)]);
        break;
      case 'older-date':
        setProducts([...products.sort(sortByOlderDate)]);
        break;
      default:
        break;
    }
  };

  return (
    <Styled.Container>
      <h4>Ordenar resultados</h4>
      <h5>Preço</h5>
      <label htmlFor="bigger-price-radio">
        <input
          id="bigger-price-radio"
          type="radio"
          name="sort-input"
          value="bigger-price"
          onChange={ (event) => handleFilter(event) }
        />
        Maior preço
      </label>
      <label htmlFor="smaller-price-radio">
        <input
          id="smaller-price-radio"
          type="radio"
          name="sort-input"
          value="smaller-price"
          onChange={ (event) => handleFilter(event) }
        />
        Menor preço
      </label>
      <h5>Data de inclusão</h5>
      <label htmlFor="newer-date-radio">
        <input
          id="newer-date-radio"
          type="radio"
          name="sort-input"
          value="newer-date"
          onChange={ (event) => handleFilter(event) }
        />
        Mais recente
      </label>
      <label htmlFor="older-date-radio">
        <input
          id="older-date-radio"
          type="radio"
          name="sort-input"
          value="older-date"
          onChange={ (event) => handleFilter(event) }
        />
        Mais antigo
      </label>
    </Styled.Container>
  );
};

export default SortFilter;