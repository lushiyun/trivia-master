import Head from 'next/head';
import { useSession } from 'next-auth/client';

import Layout from '../components/Layout';
import Landing from '../components/Landing';
import Start from '../components/Start';

const Index = () => {
  const [session] = useSession();

  return (
    <Layout>
      <Head>
        <title>Trivia Champion</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>
      {session ? <Start /> : <Landing />}
    </Layout>
  );
};

export default Index;
