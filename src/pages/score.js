import { Box, Avatar, Text, Stack, Spinner } from '@chakra-ui/core';

import Layout from '../components/Layout';
import { Table, Tr, Th, Td } from '../components/Table';
import useScores from '../util/useScores';
import parseSeconds from '../util/parseSeconds';

const sortedScores = (data) =>
  data.sort((a, b) => b.score - a.score).sort((a, b) => a.seconds - b.seconds);

const Score = () => {
  const { data, isLoading, isError } = useScores();

  return (
    <Layout>
      {isLoading ? (
        <Spinner size="xl" label="loading scores..." />
      ) : (
        <Table w="full">
          <thead>
            <Tr>
              <Th>Rank</Th>
              <Th>User</Th>
              <Th>Points</Th>
              <Th>Time</Th>
            </Tr>
          </thead>
          <tbody>
            {sortedScores(data.data).map((score, index) => (
              <Box as="tr" key={index}>
                <Td>{index + 1}</Td>
                <Td>
                  <Stack isInline spacing={2} align="center">
                    <Avatar name={score.name} src={score.image} />
                    <Text fontSize="sm">{score.name}</Text>
                  </Stack>
                </Td>
                <Td>{score.points}</Td>
                <Td>{parseSeconds(score.seconds)}</Td>
              </Box>
            ))}
          </tbody>
        </Table>
      )}
    </Layout>
  );
};

export default Score;
