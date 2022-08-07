import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import { getProduct } from '../../helpers/productsAPI';
import * as Styled from './styles';

const Search = () => {
  const { setProducts, setLoading } = useContext(ProductsContext);
  const [query, setQuery] = useState<string>('');

  const searchFor = async (event: any, query: string) => {
    event.preventDefault();
    setLoading(true);
    setProducts(await getProduct(query));
    setLoading(false);
  };

  const handleSearch = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <Styled.Container>
      <form onSubmit={ (event) => searchFor(event, query) }>
        <input
          type="text"
          value={ query }
          placeholder="buscar"
          onChange={ handleSearch }
        />
      </form>
    </Styled.Container>
  );
};

export default Search;