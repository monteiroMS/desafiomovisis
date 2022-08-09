import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import InCartProductCard from '../../components/InCartProductCard';
import { CartContext } from '../../context/CartProvider';
import { getCart, localStorageCartIsEmpty } from '../../helpers/localStorageAPI';
import * as Styled from './styles';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (!localStorageCartIsEmpty()) {
      setCart(getCart());
    }
  }, [setCart]);

  return (
    <Styled.Container>
      <Header />
      <h1>Checkout</h1>
      <Styled.Main>
        {
          !cart.length
            ? <h3>Você ainda não adicionou nada no carrinho :c</h3>
            : (
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
            )
        }
        <aside>
          <p>this is where the resume part should be</p>
        </aside>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Cart;