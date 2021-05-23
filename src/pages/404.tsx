import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import {
  Image,
  PageTitleStyled,
  PageSubTitleStyled,
} from '../components/pageStyles';
// import notFoundImage from "../images/not-found-image.svg"

const ErrorPage = () => {
  return (
    <Layout>
      {/* <img className="p-4" src={notFoundImage} alt="Page not found" /> */}
      <PageTitleStyled>404: Not Found</PageTitleStyled>
      <PageSubTitleStyled>
        You just hit a route that doesn&#39;t exist... the sadness.
      </PageSubTitleStyled>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default ErrorPage;
