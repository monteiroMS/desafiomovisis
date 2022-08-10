import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import { NO_PRODUCTS, ProductsContext } from '../../context/ProductsProvider';
import { clearLocalStorage, EMPTY_CART } from '../../helpers/localStorageAPI';
import { beautify } from '../../helpers/patterns';
import { InCartProduct } from '../../helpers/types';
import * as Styled from './styles';

const PurchaseSummary = () => {
  const { cart, setCart, setLoading, setPurchaseStatus } = useContext(CartContext);
  const { setProducts, setQuery } = useContext(ProductsContext);
  const history = useHistory();

  const getProductsPrice = () => {
    return cart.reduce((acc: number, product: InCartProduct) => {
      const totalPerProduct = product.price * product.quantity;
      return acc + totalPerProduct;
    }, 0);
  };

  const getTotal = () => {
    return getProductsPrice() + 20;
  };

  const completePurchase = () => {
    setLoading(true);
    setPurchaseStatus('success');
    setTimeout(() => {
      setCart(EMPTY_CART);
      clearLocalStorage();
      setPurchaseStatus('in-progress');
      setProducts(NO_PRODUCTS);
      setQuery('');
      setLoading(false);
      history.push('/');
    }, 1500); // simula o processamento da compra

  };

  return (
    <Styled.Container>
      <h1>Resumo</h1>
      <Styled.SummaryText>
        <p>Produtos</p>
        <p>{ `R$ ${beautify(getProductsPrice())}` }</p>
      </Styled.SummaryText>
      <Styled.SummaryText>
        <p>Descontos</p>
        <p>R$ 0,00</p>
      </Styled.SummaryText>
      <Styled.SummaryText>
        <p>Frete</p>
        <p>R$ 20,00</p>
      </Styled.SummaryText>
      <Styled.TotalContainer>
        <h4>Valor Total</h4>
        <p>{ `R$ ${beautify(getTotal())}` }</p>
      </Styled.TotalContainer>
      <button
        type="button"
        onClick={ completePurchase }
        className="complete-purchase"
      >
        Finalizar Compra
      </button>
    </Styled.Container>
  );
};

export default PurchaseSummary;
