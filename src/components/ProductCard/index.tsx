import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import { ProductPropType } from '../../helpers/types';
import * as Styled from './styles';

const ProductCard = ({ product }: ProductPropType) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    const newCart = [...cart];
    const index = newCart.findIndex(({ id }) => product.id === id);
    if (index === -1) {
      const newProduct = { ...product, quantity: 1 };
      newCart.push(newProduct);
      setCart(newCart);
    } else {
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  return (
    <Styled.Container>
      <img
        src={ product.img }
        alt={ `produto ${product.name}` }
      />
      <h4>{ product.name }</h4>
      <p>{ `R$ ${product.price}` }</p>
      <button
        type="button"
        onClick={ addToCart }
      >
        Adicionar ao carrinho
      </button>
    </Styled.Container>
  );
};

export default ProductCard;