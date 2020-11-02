import { StatGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import parseSeconds from '../util/parseSeconds';

const StatCard = ({ score, seconds }) => {
  return (
    <StatGroup w="400px" mb={8} textAlign="center">
      <Stat>
        <StatLabel>Your Score</StatLabel>
        <StatNumber>{score}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Timer</StatLabel>
        <StatNumber>{parseSeconds(seconds)}</StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default StatCard;
