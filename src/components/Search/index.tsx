import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import { getProduct } from '../../helpers/productsAPI';
import * as Styled from './styles';

const Search = () => {
  const {
    setProducts,
    setLoading,
    query,
    setQuery,
  } = useContext(ProductsContext);

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
        <Styled.InputContainer>
          <input
            type="text"
            value={ query }
            placeholder="buscar"
            onChange={ handleSearch }
          />
        </Styled.InputContainer>
      </form>
    </Styled.Container>
  );
};

export default Search;