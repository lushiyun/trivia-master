import { Heading, Link as ChakraLink } from '@chakra-ui/core';
import Link from 'next/link';

import Layout from './Layout';

const NoAccess = () => (
  <Layout>
    <Heading as="h1" size="xl" color="red" fontWeight="black">
      <span role="img" aria-label="Speak-No-Evil Monkey">
        🙊
      </span>{' '}
      Oops... access denied
    </Heading>
    <Link href="/">
      <ChakraLink>Back to Home</ChakraLink>
    </Link>
  </Layout>
);

export default NoAccess;
