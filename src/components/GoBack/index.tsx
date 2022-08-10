import * as Styled from './styles';
import voltar from '../../images/voltar.png';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
  const history = useHistory();

  return (
    <Styled.Container>
      <button
        type="button"
        onClick={ () => history.goBack() }
      >
        <img
          src={ voltar }
          alt="seta indicando voltar para a página anterior"
        />
      </button>
    </Styled.Container>
  );
};

export default GoBack;
