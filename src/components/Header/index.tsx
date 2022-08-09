import * as Styled from './styles';
import shoppingCart from '../../images/shoppingCart.png';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { InCartProduct } from '../../helpers/types';
import GoBack from '../GoBack';

const Header = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const itemsInCart = () => {
    return cart.reduce((acc: number, product: InCartProduct) => {
      return acc + product.quantity;
    }, 0);
  };

  const isOnCart = () => {
    const { location: { pathname } } = history;
    return pathname === '/carrinho';
  };

  return (
    <Styled.Container>
      { isOnCart() && <GoBack /> }
      <h1>Loja online</h1>
      <button
        type="button"
        onClick={ () => history.push('/carrinho') }
        className="button-cart"
      >
        <img
          src={ shoppingCart }
          alt="carrinho de compras"
        />
        <Styled.CounterContainer>
          { itemsInCart() }
        </Styled.CounterContainer>
      </button>
    </Styled.Container>
  );
};

export default Header;