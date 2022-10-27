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
import { useRouter } from 'next/router';

const Start = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <Stack
      borderWidth="1px"
      rounded="lg"
      width="100%"
      p={8}
      spacing={6}
      maxHeight="80vh"
    >
      <Heading as="h2" alignSelf="center">
        <span role="img" aria-label="Nerd Face">
          🤓
        </span>{' '}
        The Rules
      </Heading>
      <Text>
        We all love to learn and have fun. What better way to do that than to
        play a round of trivia! Below are the rules to get you started:
      </Text>
      <List as="ol" spacing={3}>
        <ListItem>
          <ListIcon icon="star" />
          Submit your choice to reveal the answer; then go to the next one.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          You won't be allowed to submit "no choice" but wrong answers won't
          affect your score.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          This game is timed - get the most correct answers in the least amount
          of time!
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          The timer won't continue to increase when you're looking at the
          correct answer - so feel free to relax after submission.
        </ListItem>
        <ListItem>
          <ListIcon icon="star" />
          Check how you rank on our top 10 scoreboard - and continue to increase
          your skills.
        </ListItem>
      </List>
      <Link href="/trivia">
        <Button
          isLoading={loading}
          width="125px"
          variantColor="purple"
          alignSelf="center"
        >
          Let's Go
        </Button>
      </Link>
    </Stack>
  );
};

export default Start;
