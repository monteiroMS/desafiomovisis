import * as Styled from './styles';
import shoppingCart from '../../images/shoppingCart.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <Styled.Container>
      <h1>Início</h1>
      <button
        type="button"
        onClick={ () => history.push('/carrinho') }
      >
        <img
          src={ shoppingCart }
          alt="carrinho de compras"
        />
      </button>
    </Styled.Container>
  );
};

export default Header;