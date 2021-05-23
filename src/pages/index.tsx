import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { Link } from 'gatsby';
import Theme from '../assets/theme';
import { Layout } from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Image,
  PageTitleStyled,
  PageSubTitleStyled,
  PageTextStyled,
} from '../components/pageStyles';

const Home = () => {
  return (
    <Theme>
      <Layout>
        <PageTitleStyled>Hello World</PageTitleStyled>
        <Image>
          <StaticImage
            src="../assets/images/gatsby-astronaut.png"
            alt="Gatsby and Tailwind CSS together"
          />
        </Image>
        <PageSubTitleStyled>
          Welcome to your new Gatsby site.
        </PageSubTitleStyled>
        <PageTextStyled>
          Built with Typescript, Tailwind, Styled Components, Twin & Framer.
        </PageTextStyled>
        <PageTextStyled>
          Test with React Testing Library, Jest, Cypress, Axe & Storybook.
        </PageTextStyled>
        <PageTextStyled>Deploy with S3.</PageTextStyled>
        <Link to="/docs/">View Docs</Link> <br />
      </Layout>
    </Theme>
  );
};

export default Home;
