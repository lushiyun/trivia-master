import {
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/core';
import Link from 'next/link';

const Start = () => {
  return (
    <Stack borderWidth="1px" rounded="lg" width="100%" p={8} spacing={6}>
      <Heading as="h2" alignSelf="center">
        <span role="img" aria-label="Nerd Face">
          🤓
        </span>{' '}
        The Rules
      </Heading>
      <Text>
        We all love to learn and have fun. What better way to do that than to
        play a round of trivia! Let's take a little break with this game.
      </Text>
      <Text>Below are the rules to get you started:</Text>
      <List as="ol" spacing={3}>
        <ListItem>
          <ListIcon icon="star" />
          Answer 10 randomly generated trivia questions, 1 at a time.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          Submit your choice to reveal the answer.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          You won't be allowed to submit "no choice" but wrong answers won't
          affect your score.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          This game is timed - get the most correct answers in the shortest
          amount of time!
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          The timer won't continue to increase when you're looking at the
          correct answer - so take as much time as you want to be amazed by the
          correct answers.
        </ListItem>
      </List>
      <Link href="/trivia" replace>
        <Button width="125px" variantColor="purple" alignSelf="center">
          Let's Go
        </Button>
      </Link>
    </Stack>
  );
};

export default Start;
