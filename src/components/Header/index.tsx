import * as Styled from './styles';
import shoppingCart from '../../images/shoppingCart.png';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { InCartProduct } from '../../helpers/types';

const Header = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const itemsInCart = () => {
    return cart.reduce((acc: number, product: InCartProduct) => {
      return acc + product.quantity;
    }, 0);
  };

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
        { itemsInCart() }
      </button>
    </Styled.Container>
  );
};

export default Header;