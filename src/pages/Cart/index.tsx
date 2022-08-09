import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import InCartProductCard from '../../components/InCartProductCard';
import Loading from '../../components/Loading';
import PurchaseSummary from '../../components/PurchaseSummary';
import { CartContext } from '../../context/CartProvider';
import { getCart, localStorageCartIsEmpty } from '../../helpers/localStorageAPI';
import * as Styled from './styles';

const Cart = () => {
  const { cart, setCart, purchaseStatus } = useContext(CartContext);

  useEffect(() => {
    if (!localStorageCartIsEmpty()) {
      setCart(getCart());
    }
  }, [setCart]);

  if (purchaseStatus === 'success') {
    return (
      <Styled.Container>
        <Header />
        <Loading />
        <p>Compra realizada com sucesso!</p>
        <p>Redirecionando você para a página inicial em alguns segundos...</p>
      </Styled.Container>
    );
  } 

  return (
    <Styled.Container>
      <Header /> 
      <h1>Checkout</h1>
        <Styled.Main>
          {cart[0].name === 'empty-cart' ? <h3>Você ainda não adicionou nada no carrinho :c</h3> : (
              <div className="cart-products-container">
                {cart.map((product) => (
                    <InCartProductCard
                      key={ product.id }
                      product={ product }
                    />
                  ))}
              </div>
            )
          }
          <PurchaseSummary />
        </Styled.Main>
    </Styled.Container>
  );
};

export default Cart;