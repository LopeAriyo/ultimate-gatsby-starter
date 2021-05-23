import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import {
  GatsbyIcon,
  TypescriptIcon,
  TailwindIcon,
  StyledComponentsIcon,
  TwinIcon,
  GithubIcon,
} from '../../assets/icons';

const FooterStyled = styled.footer`
  ${tw`flex flex-col justify-center w-full bg-purple-200 py-4 px-2 h-32`}
  svg {
    width: 80px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const FooterTextStyled = styled.p`
  ${tw`text-center`}
`;

const IconsStyled = styled.div`
  ${tw`flex flex-row justify-center gap-5 bg-transparent py-2`}
`;

const Footer = () => (
  <FooterStyled>
    <FooterTextStyled>
      © {new Date().getFullYear()}, Built with
    </FooterTextStyled>
    <IconsStyled>
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyIcon />
      </a>
      <a
        href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TypescriptIcon />
      </a>
      <a
        href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TailwindIcon />
      </a>
      <a
        href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledComponentsIcon />
      </a>
      <a
        href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwinIcon />
      </a>
      <a
        href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </IconsStyled>
  </FooterStyled>
);

export { Footer };
