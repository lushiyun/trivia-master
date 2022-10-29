import React from 'react';
import { Box, Progress, Spinner } from '@chakra-ui/core';
import { collection, getDocs } from 'firebase/firestore';

import shuffle from '../util/shuffle';
import TriviaCard from '../components/TriviaCard';
import Layout from '../components/Layout';
import database from '../util/firebaseConfig';

const Trivia = ({ questions }) => {
  const [active, setActive] = React.useState(0);
  const isLast = active === questions.length - 1;

  const updateActive = () => {
    setActive((prev) => prev + 1);
  };

  return (
    <Layout>
      {!questions ? (
        <Spinner size="xl" label="loading trivia questions..." />
      ) : (
        <>
          <TriviaCard
            question={questions[active]}
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

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(database, 'questions'));
  const questions = querySnapshot.docs.map((doc) => doc.data());
  // get 10 random questions
  const randomQuestions = shuffle(questions).slice(0, 10);

  return {
    props: {
      questions: randomQuestions.map((question) => {
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
      }),
    },
  };
}

export default Trivia;
