import styled, { css, createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import reset from 'styled-reset-advanced';

export const GlobalStyle = createGlobalStyle`
${reset}
*, *:before, *:after {
  box-sizing: border-box;
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
    font-size: 16px;
    color: '#1a202c';
}
body {
  font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
  line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
}
`;

export const Main = styled.div`
  ${tw`m-0 flex flex-col min-h-screen `}
`;

export const Container = styled.div`
  ${tw`max-w-4xl py-16 h-full flex-grow mx-auto flex flex-col justify-around`}
`;
