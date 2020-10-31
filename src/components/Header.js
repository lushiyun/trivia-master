import { Link as ChakraLink, Box, Flex } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';

import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => (
  <Box
    pos="fixed"
    as="header"
    top="0"
    zIndex="4"
    left="0"
    right="0"
    borderBottomWidth="1px"
    width="full"
    height="4rem">
    <Box width="full" mx="auto" px={6} pr={[1, 6]} height="100%">
      <Flex
        size="100%"
        p={[0, 6]}
        pl={[0, 4]}
        align="center"
        justify="space-between">
        <Box d="block">
          <Logo w="180px" />
        </Box>

        <Flex align="center">
          <ChakraLink
            isExternal
            href="https://github.com/lushiyun/trivia-master">
            <Box as={FaGithub} size="25px" />
          </ChakraLink>
          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Box>
  </Box>
);

export default Header;
