import { Box, Flex, IconButton, Stack } from '@chakra-ui/core';

import useSWR from 'swr';
import ScoreCard from './ScoreCard';
import TriviaCard from './TriviaCard';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// async function fetchQuestionsRequest() {
//   return [];
// }

const TriviaCardList = () => {
  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      width={['100%', 'xl', 'xl', 'xl']}
      spacing={8}>
      <Stack mt={3} mb={3}>
        <ScoreCard />
      </Stack>
      <TriviaCard />
      <Stack isInline spacing={2} justify="center" mt={8}>
        <IconButton
          size="lg"
          aria-label="previous question"
          icon="chevron-left"
        />
        <IconButton size="lg" aria-label="next question" icon="chevron-right" />
      </Stack>
    </Stack>
  );
};

export default TriviaCardList;
