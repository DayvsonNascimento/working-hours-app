import styled from 'styled-components';
import { CardContainer } from '../../../assets/styles/GlobaStyles';
import { AiOutlineFieldTime } from 'react-icons/ai';

export const Container = styled(CardContainer)`
  padding: 15px 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px
`;

export const Text = styled.span`
  color: #a1a1a1;
  font-size: 14px;
`;

export const Title = styled.h4`
  margin: 0.5rem 0;
`;

export const Icon = styled(AiOutlineFieldTime)`
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
