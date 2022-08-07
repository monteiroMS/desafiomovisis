import Filters from '../../components/Filters';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Search from '../../components/Search';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <span className="principal-container">
        <Filters />
        <main>
          <Search />
          <Products />
        </main>
      </span>
    </Styled.Container>
  );
};

export default Home;