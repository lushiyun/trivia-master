import { Box, Avatar, Text, Stack } from '@chakra-ui/core';

// import { connectToDatabase } from '../util/mongodb';
// import StatCard from '../components/StatCard';
// import TriviaCard from '../components/TriviaCard';
// import NoAccess from '../components/NoAccess';
import Layout from '../components/Layout';

import { Table, Tr, Th, Td } from '../components/Table';

const Score = () => {
  return (
    <Layout>
      <Table w="full">
        <thead>
          <Tr>
            <Th>User</Th>
            <Th>Score</Th>
            <Th>Time</Th>
          </Tr>
        </thead>
        <tbody>
          <Box as="tr">
            <Td>
              <Stack isInline spacing={2} align="center">
                <Avatar
                  name="Shiyun Lu"
                  src="https://avatars3.githubusercontent.com/u/13009238?v=4"
                />
                <Text fontSize="sm">Shiyun Lu</Text>
              </Stack>
            </Td>
            <Td>10</Td>
            <Td>1:35</Td>
          </Box>
          <Box as="tr">
            <Td>
              <Stack isInline spacing={2} align="center">
                <Avatar
                  name="Skylar Ruby Cushing"
                  src="https://picsum.photos/200/300"
                />
                <Text fontSize="sm">Skylar Ruby Cushing</Text>
              </Stack>
            </Td>
            <Td>10</Td>
            <Td>1:35</Td>
          </Box>
        </tbody>
      </Table>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const { db } = await connectToDatabase();

//   const users = await db
//     .collection('users')
//     .find({})
//     .sort({ score: -1, time: 1 })
//     .limit(10)
//     .toArray();

//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// }

export default Score;
