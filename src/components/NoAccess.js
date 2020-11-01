import { Stack, Heading, Link as ChakraLink } from '@chakra-ui/core';
import Link from 'next/link';

const NoAccess = () => (
  <Stack
    spacing={10}
    direction="column"
    align="center"
    justify="center"
    height="100vh">
    <Heading as="h1" size="xl" color="red" fontWeight="black">
      <span role="img" aria-label="Speak-No-Evil Monkey">
        🙊
      </span>{' '}
      Oops... access denied
    </Heading>
    <Link href="/">
      <ChakraLink>Back to Home</ChakraLink>
    </Link>
  </Stack>
);

export default NoAccess;
