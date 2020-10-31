import Head from 'next/head';
import { useSession } from 'next-auth/client';

import Layout from '../components/Layout';
import Landing from '../components/Landing';
import TriviaCardList from '../components/TriviaCardList';

const Index = () => {
  const [session] = useSession();

  return (
    <Layout>
      <Head>
        <title>Trivia Champion</title>
      </Head>
      <TriviaCardList />
      {/* {session ? <TriviaCardList /> : <Landing />} */}
    </Layout>
  );
};

export default Index;
