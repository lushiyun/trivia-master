import { Flex, Heading, Text, Button } from '@chakra-ui/core';
import { signIn } from 'next-auth/client';

const Landing = () => (
  <Flex
    direction="column"
    justify="center"
    align="center"
    height="100vh"
    maxW="xl">
    <Heading as="h1" size="xl" fontWeight="black">
      Train your trivia skills to become the next champion.
    </Heading>

    <Text opacity="0.7" fontSize="lg" mt="6">
      Answer trivia questions, ten at a time, to get the highest score among all
      masters!
    </Text>

    <Button mt="8" variantColor="purple" onClick={signIn}>
      Let's get started
    </Button>
  </Flex>
);

export default Landing;
