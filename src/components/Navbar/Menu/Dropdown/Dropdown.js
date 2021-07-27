import { removeToken } from '../../../../utils/authCookieUtil';

import {
  Container,
  DropdownBtn,
  Label,
  DropdownIcon,
  DropdownContent,
  DropdownItem,
} from './styles';

const Dropdown = ({ label, handleItemSelection }) => {
  const handleSignOut = () => {
    removeToken();
    handleItemSelection('login');
  };

  return (
    <Container>
      <DropdownBtn>
        <Label>{label}</Label>
        <DropdownIcon />
      </DropdownBtn>

      <DropdownContent>
        <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
      </DropdownContent>
    </Container>
  );
};

export default Dropdown;
