import { Box, Progress, Spinner, Stack } from '@chakra-ui/core';

import StatCard from './StatCard';
import TriviaCard from './TriviaCard';

const TriviaCardList = ({ questions }) => {
  const [active, setActive] = React.useState(0);
  const [score, setScore] = React.useState(0);

  if (!questions) {
    return <Spinner thickness="4px" speed="0.8s" size="xl" />;
  }

  const updateScore = (correct) => {
    correct && setScore((prev) => prev + 1);
  };

  const updateActive = () => {
    setActive((prev) => prev + 1);
  };

  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      width={['100%', 'xl', 'xl', 'xl']}
      spacing={8}>
      <Stack mt={3} mb={3}>
        <StatCard score={score} />
      </Stack>

      <TriviaCard
        question={questions[active]}
        updateScore={updateScore}
        updateActive={updateActive}
      />

      <Box rounded="md" width="100%" borderWidth="1px" p={2} mt={4}>
        <Progress
          color="purple"
          value={((active + 1) / 10) * 100}
          width="100%"
        />
      </Box>
    </Stack>
  );
};

export default TriviaCardList;
