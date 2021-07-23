import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 344px;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  background-color: #f5f8fa;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const RightSideContainer = styled.div`
  margin-left: 24px;
  flex: 1;
`;
