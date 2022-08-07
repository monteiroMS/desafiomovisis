import PriceFilter from '../PriceFilter';
import * as Styled from './styles';

const Filters = () => {
  return (
    <Styled.Container>
      <h2>Filtros</h2>
      <PriceFilter />
      <p>Ordenar</p>
    </Styled.Container>
  );
};

export default Filters;