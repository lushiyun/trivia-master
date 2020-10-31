import Head from 'next/head';

import Container from './Container';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta
        name="description"
        content="Trivia site for Tandem's Apprenticeship Challenge"
      />
    </Head>
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  </>
);

export default Layout;
