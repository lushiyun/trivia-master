import Head from 'next/head';
import { Stack, Flex, useColorMode } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'gray.900', dark: 'gray.50' };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Trivia site for Tandem's Apprenticeship Challenge"
        />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        minH="100vh">
        <Header />
        <Stack
          direction="column"
          justify="center"
          align="center"
          flexGrow={1}
          width={['100%', 'xl', 'xl', 'xl']}
          spacing={8}>
          {children}
        </Stack>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
