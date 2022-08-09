import { InCartProductPropType } from '../../helpers/types';
import * as Styled from './styles';

const InCartProductCard = ({ product }: InCartProductPropType) => {
  return (
    <Styled.ProductCard>
      <img
        src={ product.img }
        alt={ product.name }
      />
      <p>{ product.name }</p>
      <p>{ `R$ ${product.price}` }</p>
      <p>{ `Quantidade ${product.quantity}` }</p>
    </Styled.ProductCard>
  );
};

export default InCartProductCard;
