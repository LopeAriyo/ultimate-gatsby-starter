import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

const HeaderTitleStyled = styled.h1`
  ${tw`text-4xl text-center font-semibold text-white`}
`;

const HeaderStyled = styled.header`
  ${tw`flex items-center justify-center w-full bg-purple-800 py-5 px-6 h-40`}
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitleStyled>Gatsby Ultimate Starter</HeaderTitleStyled>
    </HeaderStyled>
  );
};

export { Header };
