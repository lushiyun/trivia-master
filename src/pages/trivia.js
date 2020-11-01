import { Box, Progress, Spinner, Stack } from '@chakra-ui/core';
import { useSession } from 'next-auth/client';

import { connectToDatabase } from '../util/mongodb';
import shuffle from '../util/shuffle';
import StatCard from '../components/StatCard';
import TriviaCard from '../components/TriviaCard';
import NoAccess from '../components/NoAccess';
import Layout from '../components/Layout';

const Trivia = ({ questions }) => {
  const [session, loading] = useSession();

  if (!loading && !session) return <NoAccess />;

  const [active, setActive] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const isLast = active === questions.length - 1;

  const updateScore = (correct) => {
    correct && setScore((prev) => prev + 1);
  };

  const updateActive = () => {
    setActive((prev) => prev + 1);
  };

  return (
    <Layout>
      <Stack
        direction="column"
        justify="center"
        align="center"
        height="100vh"
        width={['100%', 'xl', 'xl', 'xl']}
        spacing={8}>
        {loading || !questions ? (
          <Spinner size="xl" label="loading trivia questions..." />
        ) : (
          <>
            <Stack mt={3} mb={3}>
              <StatCard score={score} />
            </Stack>

            <TriviaCard
              question={questions[active]}
              updateScore={updateScore}
              updateActive={updateActive}
              isLast={isLast}
            />

            <Box rounded="md" width="100%" borderWidth="1px" p={2} mt={4}>
              <Progress
                color="purple"
                value={((active + 1) / 10) * 100}
                width="100%"
              />
            </Box>
          </>
        )}
      </Stack>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const questions = await db
    .collection('questions')
    .aggregate([{ $sample: { size: 10 } }])
    .toArray();

  return {
    props: {
      questions: JSON.parse(
        JSON.stringify(
          questions.map((question) => {
            const answers = question.incorrect.concat(question.correct);
            const shuffledAnswers = shuffle(answers);
            const correctIndex = shuffledAnswers.findIndex(
              (answer) => answer === question.correct
            );

            return {
              title: question.question,
              answers: shuffledAnswers,
              correctIndex,
            };
          })
        )
      ),
    },
  };
}

export default Trivia;
