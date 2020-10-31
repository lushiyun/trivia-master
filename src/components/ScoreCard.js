import { Stat, StatLabel, StatNumber, useColorMode } from '@chakra-ui/core';

const ScoreCard = ({ score }) => {
  const { colorMode } = useColorMode();

  return (
    <Stat
      rounded="lg"
      bg={colorMode === 'light' ? 'purple.100' : 'purple.500'}
      p={4}
      textAlign="center">
      <StatLabel>Your score</StatLabel>
      <StatNumber>{score}</StatNumber>
    </Stat>
  );
};

export default ScoreCard;
