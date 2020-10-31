import { IconButton, Spinner, Stack } from '@chakra-ui/core';

import ScoreCard from './ScoreCard';
import TriviaCard from './TriviaCard';

const TriviaCardList = ({ questions }) => {
  const [active, setActive] = React.useState(0);
  const [score, setScore] = React.useState(0);

  if (!questions) {
    return <Spinner thickness="4px" speed="0.8s" size="xl" />;
  }

  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      width={['100%', 'xl', 'xl', 'xl']}
      spacing={8}>
      <Stack mt={3} mb={3}>
        <ScoreCard score={score} />
      </Stack>
      <TriviaCard question={questions[active]} />
      {active !== questions.length - 1 && (
        <IconButton
          onClick={() => setActive((prev) => prev + 1)}
          mt={8}
          size="lg"
          aria-label="next question"
          icon="chevron-right"
        />
      )}
    </Stack>
  );
};

export default TriviaCardList;
