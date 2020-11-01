import { Box, Progress, Spinner, Stack } from '@chakra-ui/core';
import { useSession } from 'next-auth/client';

import { connectToDatabase } from '../util/mongodb';
import StatCard from '../components/StatCard';
import TriviaCard from '../components/TriviaCard';
import NoAccess from '../components/NoAccess';
import Layout from '../components/Layout';

const Score = ({ users }) => {
  return (
    <Layout>
      {!users ? (
        <Spinner size="xl" label="loading scores..." />
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
    </Layout>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const users = await db
    .collection('users')
    .find({})
    .sort({ score: -1, time: 1 })
    .limit(10)
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default Score;
