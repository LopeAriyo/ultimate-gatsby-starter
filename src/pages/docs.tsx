import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import {
  Image,
  PageTitleStyled,
  PageTextStyled,
} from '../components/pageStyles';

const SecondPage = () => (
  <Layout>
    <PageTitleStyled>Learn The Tools In This Starter</PageTitleStyled>
    <PageTextStyled>Here are somethings you can learn:</PageTextStyled>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
