import * as Styled from './styles';
import shoppingCart from '../../images/shoppingCart.png';

const Header = () => {
  return (
    <Styled.Container>
      <h1>Início</h1>
      <img
        src={ shoppingCart }
        alt="carrinho de compras"
      />
    </Styled.Container>
  );
};

export default Header;