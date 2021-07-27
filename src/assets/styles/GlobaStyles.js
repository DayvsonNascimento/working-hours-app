import styled, { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f8fa;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

    input[type='time']::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
    }

    input:focus,
    textarea:focus {
    outline: none !important;
    border-color: rgb(29, 161, 242);
    box-shadow: 0 0 5px rgb(29, 161, 242);
    }

    input:hover {
    border-color: rgb(29, 161, 242);
    }
`;

export const PageContainer = styled.div`
  background-color: #3598dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const CustomErrorText = styled.div`
  margin-top: 0;
  font-size: 12px;
  text-align: left;
  color: #f02849;
  margin-bottom: 2px;
`;
