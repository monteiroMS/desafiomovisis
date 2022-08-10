import * as Styled from './styles';
import loading from '../../images/loading.gif';

const Loading = () => {
  return (
    <Styled.Container>
      <img
        src={ loading }
        alt="animação de loading"
      />
    </Styled.Container>
  );
};

export default Loading;