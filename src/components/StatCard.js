import { StatGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/core';

const parseSeconds = (number) => {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number - hours * 3600) / 60);
  const seconds = number - hours * 3600 - minutes * 60;
  return `${hours}: ${minutes} : ${number}`;
};

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
