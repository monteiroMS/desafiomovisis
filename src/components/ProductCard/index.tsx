import { ProductCardType } from '../../helpers/types';
import * as Styled from './styles';

const ProductCard = ({ name, img, price }: ProductCardType) => {
  return (
    <Styled.Container>
      <img
        src={ img }
        alt={ `produto ${name}` }
      />
      <h4>{ name }</h4>
      <p>{ `R$ ${price}` }</p>
    </Styled.Container>
  );
};

export default ProductCard;