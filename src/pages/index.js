import Head from 'next/head';

import Layout from '../components/Layout';
import Start from '../components/Start';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Trivia Champion</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <Start />

    </Layout>
  );
};

export default Index;
