import { Container, Icon, Text } from './styles';

const ProfileCard = ({ profile }) => {
  return (
    <Container>
      <Icon />
      <Text>{profile?.fullName}</Text>
      <Text>{profile?.email}</Text>
    </Container>
  );
};

export default ProfileCard;
