import Head from 'next/head';
import { Stack } from '@chakra-ui/core';

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
      <Stack
        direction="column"
        justify="center"
        align="center"
        height="100vh"
        width={['100%', 'xl', 'xl', 'xl']}
        spacing={8}>
        {children}
      </Stack>
    </Container>
  </>
);

export default Layout;
