import { Link as ChakraLink, Box, Flex, Button } from '@chakra-ui/core';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <Box
      as="header"
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
            <Link href="/score">
              <Button size="sm" mr={3}>Score Board</Button>
            </Link>

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
};

export default Header;
