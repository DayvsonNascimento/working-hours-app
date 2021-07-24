import { useHistory } from 'react-router';

import Dropdown from '../Dropdown/Dropdown';
import {
  Container,
  IconHome,
  Title,
  IconUser,
  LeftMenuContainer,
  RightMenuContainer,
} from './styles';

const Menu = () => {
  const history = useHistory();

  const handleItemSelection = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <LeftMenuContainer onClick={() => handleItemSelection('/home')}>
        <IconHome />
        <Title>Home</Title>
      </LeftMenuContainer>

      <RightMenuContainer>
        <IconUser />
        <Dropdown label={'Dayvson'} handleItemSelection={handleItemSelection} />
      </RightMenuContainer>
    </Container>
  );
};

export default Menu;
