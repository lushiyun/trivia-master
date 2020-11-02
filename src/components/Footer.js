import { Flex, Text, Link as ChakraLink } from '@chakra-ui/core';

const Footer = () => (
  <Flex as="footer" w="100%" h="4rem" align="center" justify="center">
    <Text>
      Made with{' '}
      <span role="img" aria-label="Yellow Heart">
        💛
      </span>{' '}
      by{' '}
      <ChakraLink href="https://www.shiyunlu.com/" isExternal>
        Shiyun Lu
      </ChakraLink>
    </Text>
  </Flex>
);

export default Footer;
