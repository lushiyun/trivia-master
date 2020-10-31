import Head from 'next/head';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';
import Layout from '../components/Layout';
import Landing from '../components/Landing';


// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// async function fetchQuestionsRequest() {
//   return [];
// }

const Index = () => {
  const [session] = useSession();

  return (
    <Layout>
      <Head>
        <title>Trivia Champion</title>
      </Head>
      <Landing />
    </Layout>
  );
};

export default Index;
