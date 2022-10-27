import { Box, Text, Stack, Spinner } from '@chakra-ui/core';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import React from 'react';

import Layout from '../components/Layout';
import { Table, Tr, Th, Td } from '../components/Table';
import database from '../util/firebaseConfig';
import parseSeconds from '../util/parseSeconds';

const Score = () => {
  const [scores, setScores] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getScores = async () => {
      try {
        const q = query(
          collection(database, 'scores'),
          orderBy('score', 'desc'),
          orderBy('seconds', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        const scores = querySnapshot.docs.map((doc) => doc.data());
        setScores(scores);
      } catch (error) {
        console.error(error);
        window.alert('Error fetching scores');
      } finally {
        setLoading(false);
      }
    };

    getScores();
  }, []);

  return (
    <Layout>
      {loading ? (
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
            {scores.map((score, index) => (
              <Box as="tr" key={index}>
                <Td>{index + 1}</Td>
                <Td>
                  <Stack isInline spacing={2} align="center">
                    <Text fontSize="sm">{score.name}</Text>
                  </Stack>
                </Td>
                <Td>{score.score}</Td>
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
