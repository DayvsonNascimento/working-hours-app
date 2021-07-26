import {
  Container,
  DropdownBtn,
  Label,
  DropdownIcon,
  DropdownContent,
  DropdownItem,
} from './styles';

const Dropdown = ({ label, handleItemSelection }) => {
  return (
    <Container>
      <DropdownBtn>
        <Label>{label}</Label>
        <DropdownIcon />
      </DropdownBtn>

      <DropdownContent>
        <DropdownItem onClick={() => handleItemSelection('login')}>
          Sign Out
        </DropdownItem>
      </DropdownContent>
    </Container>
  );
};

export default Dropdown;
