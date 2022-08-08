import PriceFilter from '../PriceFilter';
import SortFilter from '../SortFilter';
import * as Styled from './styles';

const Filters = () => {
  return (
    <Styled.Container>
      <h2>Filtros</h2>
      <PriceFilter />
      <SortFilter />
    </Styled.Container>
  );
};

export default Filters;