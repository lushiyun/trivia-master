import { Heading, Text, Button } from '@chakra-ui/core';
import { signIn } from 'next-auth/client';

const Landing = () => (
  <>
    <Heading as="h1" size="xl" fontWeight="black">
      Train your trivia skills to become the next champion.
    </Heading>

    <Text opacity="0.7" fontSize="lg" mt="6">
      Answer trivia questions, ten at a time, to compete with all the trivia
      masters out there!
    </Text>

    <Button mt="8" variantColor="purple" onClick={signIn}>
      Let's get started
    </Button>
  </>
);

export default Landing;
