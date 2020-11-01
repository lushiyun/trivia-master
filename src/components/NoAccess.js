import { Flex, Heading } from '@chakra-ui/core';

const NoAccess = () => (
  <Flex
    direction="column"
    justify="center"
    align="center"
    height="100vh"
    maxW="xl">
    <Heading as="h1" size="xl" color="red" fontWeight="black">
      Access Denied
    </Heading>
  </Flex>
);

export default NoAccess;
