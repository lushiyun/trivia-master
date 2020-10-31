import Head from 'next/head';
import useSWR from 'swr';
import Landing from '../components/Landing';

import Layout from '../components/Layout';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// async function fetchQuestionsRequest() {
//   return [];
// }

const Index = () => (
  <Layout>
    <Head>
      <title>Trivia Champion</title>
    </Head>
    <Landing />
  </Layout>
);

export default Index;
