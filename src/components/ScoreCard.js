import { Stat, StatLabel, StatNumber } from '@chakra-ui/core';

const ScoreCard = ({ score }) => {

  return (
    <Stat p={4} textAlign="center">
      <StatLabel>Your score</StatLabel>
      <StatNumber>{score}</StatNumber>
    </Stat>
  );
};

export default ScoreCard;
