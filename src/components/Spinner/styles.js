import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  vertical-align: text-bottom;
  border: 0.25em solid;
  border-right: 0.25em solid transparent;
  border-radius: 50%;
  animation: spinner 0.75s infinite linear;
  color: #ffffff;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
