import { useContext } from 'react';
import Header from '../../components/Header';
import InCartProductCard from '../../components/InCartProductCard';
import { CartContext } from '../../context/CartProvider';
import * as Styled from './styles';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Styled.Container>
      <Header />
      <main className="main-container">
        <h1>Checkout</h1>
        <div className="cart-products-container">
          {
            cart.map((product) => (
              <InCartProductCard
                key={ product.id }
                product={ product }
              />
            ))
          }
        </div>
      </main>
    </Styled.Container>
  );
};

export default Cart;