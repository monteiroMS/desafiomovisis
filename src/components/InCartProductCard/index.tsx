import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { saveOnLocalStorage } from '../../helpers/localStorageAPI';
import { InCartProductPropType } from '../../helpers/types';
import * as Styled from './styles';
import trashCan from '../../images/lixeira.png';
import minus from '../../images/minus.png';
import plus from '../../images/plus.png';

const InCartProductCard = ({ product }: InCartProductPropType) => {
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = ({ target: { name } }: any) => {
    const newCart = [...cart];
    const index = newCart.findIndex(({ id }) => product.id === id);
    if (name === 'plus') {
      newCart[index].quantity += 1;
    } else if (newCart[index].quantity !== 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
    saveOnLocalStorage(newCart);
  };

  const handleRemove = () => {
    const savedCart = [...cart];
    const newCart = savedCart.filter(({ id }) => id !== product.id);
    setCart(newCart);
    saveOnLocalStorage(newCart);
  };

  return (
    <Styled.ProductCard>
      <img
        src={ product.img }
        alt={ product.name }
      />
      <p>{ product.name }</p>
      <p>{ `R$ ${product.price * product.quantity}` }</p>
      <button
        type="button"
        onClick={ handleQuantityChange }
        name="minus"
      >
        <img
          src={ minus }
          alt="minus sign"
          width="20px"
        />
      </button>
      <p>{ `Quantidade ${product.quantity}` }</p>
      <button
        type="button"
        onClick={ handleQuantityChange }
        name="plus"
      >
        <img
          src={ plus }
          alt="plus sign"
          width="20px"
        />
      </button>
      <button
        type="button"
        onClick={ handleRemove }
      >
        <img
          alt="lixeira"
          src={ trashCan }
          width="20px"
        />
      </button>
    </Styled.ProductCard>
  );
};

export default InCartProductCard;
