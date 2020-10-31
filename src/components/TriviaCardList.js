import { Box, Flex, IconButton, Spinner, Stack } from '@chakra-ui/core';
import useQuestions from '../../useQuestions';

import ScoreCard from './ScoreCard';
import TriviaCard from './TriviaCard';

const TriviaCardList = () => {
  const { questions, isLoading, isError } = useQuestions();

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [score, setScore] = React.useState(0);
  const isLastQuestion = activeQuestion === questions.length - 1;

  const handleNext = () => {
    setActiveQuestion((prev) => prev + 1);
  };

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error</div>;

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
      <TriviaCard />
      {!isLastQuestion && (
        <IconButton size="lg" aria-label="next question" icon="chevron-right" />
      )}
    </Stack>
  );
};

export default TriviaCardList;
