import Head from 'next/head';
import { useSession } from 'next-auth/client';

import { connectToDatabase } from '../util/mongodb';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import TriviaCardList from '../components/TriviaCardList';
import shuffle from '../util/shuffle';

const Index = ({ questions }) => {
  const [session] = useSession();
  console.log(questions);

  return (
    <Layout>
      <Head>
        <title>Trivia Champion</title>
      </Head>
      <TriviaCardList questions={questions} />
      {/* {session ? <TriviaCardList /> : <Landing />} */}
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

export default Index;
