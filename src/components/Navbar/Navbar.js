import { useHistory } from 'react-router-dom';
import {
  Container,
  Content,
  IconHome,
  Title,
  IconUser,
  RighNavbarContainer,
  Dropdown,
  DropdownIcon,
  DropdownContent,
  DropdownItem,
  DropdownBtn,
} from './styles';

const Navbar = () => {
  const history = useHistory();

  const handleSignOut = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Content>
        <IconHome />
        <Title>Home</Title>

        <RighNavbarContainer>
          <IconUser />

          <Dropdown>
            <DropdownBtn>
              <Title>Dayvson</Title>
              <DropdownIcon />
            </DropdownBtn>

            <DropdownContent>
              <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </RighNavbarContainer>
      </Content>
    </Container>
  );
};

export default Navbar;
