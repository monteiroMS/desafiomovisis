import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { EMPTY_CART, saveOnLocalStorage } from '../../helpers/localStorageAPI';
import { InCartProductPropType } from '../../helpers/types';
import * as Styled from './styles';
import trashCan from '../../images/lixeira.png';
import { beautify } from '../../helpers/patterns';

const InCartProductCard = ({ product }: InCartProductPropType) => {
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = ({ target: { name } }: any) => {
    const newCart = [...cart];
    const index = newCart.findIndex(({ id }) => product.id === id);
    if (name === 'plus') {
      newCart[index].quantity += 1;
    } else if (name === 'minus' && newCart[index].quantity !== 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
    saveOnLocalStorage(newCart);
  };

  const handleRemove = () => {
    const savedCart = [...cart];
    const newCart = savedCart.filter(({ id }) => id !== product.id);
    if (!newCart.length) {
      setCart(EMPTY_CART);
      saveOnLocalStorage(EMPTY_CART);
    } else {
      setCart(newCart);
      saveOnLocalStorage(newCart);
    }
  };

  const getPrice = () => {
    return product.price * product.quantity;
  };

  const onlyOne = () => {
    return product.quantity === 1
  };

  return (
    <Styled.ProductCard>
      <img
        src={ product.img }
        alt={ product.name }
      />
      <Styled.DetailsContainer>
        <p>{ product.name }</p>
        <Styled.ButtonsContainer>
          <p>{ `R$ ${beautify(getPrice())}` }</p>
          <button
            type="button"
            onClick={ handleQuantityChange }
            name="minus"
            disabled={ onlyOne() }
            className="quantity-buttons"
          >
            -
          </button>
          <p>{ `Quantidade: ${product.quantity}` }</p>
          <button
            type="button"
            onClick={ handleQuantityChange }
            name="plus"
            className="quantity-buttons"
          >
            +
          </button>
          <button
            type="button"
            onClick={ handleRemove }
            className="remove-button"
          >
            <img
              alt="lixeira"
              src={ trashCan }
              width="20px"
            />
          </button>
        </Styled.ButtonsContainer>
      </Styled.DetailsContainer>
    </Styled.ProductCard>
  );
};

export default InCartProductCard;
