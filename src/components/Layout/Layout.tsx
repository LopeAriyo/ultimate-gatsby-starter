import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../seo';
import { Container, GlobalStyle, Main } from '../globalStyle';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <Main>
      <Header />
      <Container>
        <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          {children}
        </motion.main>
      </Container>
      <Footer />
    </Main>
  </>
);

export { Layout };
