import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textContrast};
    border: 1px solid ${({ theme }) => theme.colors.primaryDarker};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDarker};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
      cursor: default;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.shadeThree};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shadeFour};
  }
}
`;
