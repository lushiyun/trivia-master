import {
  Text,
  Stack,
  RadioGroup,
  Button,
  useToast,
  Collapse,
  Radio,
  IconButton,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link as ChakraLink,
} from '@chakra-ui/core';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import Confetti from 'react-confetti';

import { correctFeedback, wrongFeedback } from '../util/feedback';
import StatCard from './StatCard';

const TriviaCard = ({ question, updateActive, isLast }) => {
  const [session] = useSession();

  const [score, setScore] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [timerActive, setTimerActive] = React.useState(true);
  const [value, setValue] = React.useState(null);
  const [correctShow, setCorrectShow] = React.useState(false);
  const [wrongShow, setWrongShow] = React.useState(false);
  const [radioDisabled, setRadioDisabled] = React.useState(false);
  const [submitDisabled, setSubmitDisabled] = React.useState(false);
  const [nextDisabled, setNextDisabled] = React.useState(false);
  const [confettiOpen, setConfettiOpen] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const correctAnswer = question.answers[question.correctIndex];

  React.useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerActive, seconds]);

  const onSubmit = () => {
    if (!value) {
      toast({
        title: 'Error',
        description: 'You must select an answer',
        status: 'error',
        duration: '5000',
        isClosable: true,
      });
      return;
    }

    if (+value === question.correctIndex) {
      setCorrectShow(true);
      setScore((prev) => prev + 1);
    } else {
      setWrongShow(true);
    }

    setTimerActive(false);
    setRadioDisabled(true);
    setSubmitDisabled(true);
    setValue(null);
  };

  const handleNext = () => {
    if (isLast) {
      onOpen();
      setNextDisabled(true);
      setConfettiOpen(true);
      createScore({
        points: score,
        seconds,
        name: session.user.name,
        image: session.user.image,
      });
    } else {
      updateActive();
      setRadioDisabled(false);
      setCorrectShow(false);
      setWrongShow(false);
      setSubmitDisabled(false);
      setTimerActive(true);
    }
  };

  const renderedNextButton = (
    <IconButton
      onClick={handleNext}
      mt={4}
      size="lg"
      aria-label="next question"
      icon={isLast ? 'check' : 'chevron-right'}
      isDisabled={nextDisabled}
    />
  );

  const renderedText = () => {
    if (+score === 10) {
      return (
        <Text>
          <span role="img" aria-label="Star-Struck">
            🤩
          </span>{' '}
          Wow! Perfect score!!!
        </Text>
      );
    } else {
      return (
        <Text>
          You scored {score} in {seconds} seconds.{' '}
          <ChakraLink as={Link} to="/">
            Try again
          </ChakraLink>{' '}
          for a perfect score!
        </Text>
      );
    }
  };

  return (
    <>
      <StatCard score={score} seconds={seconds} />

      <Stack borderWidth="1px" rounded="lg" width="100%" p={8} spacing={8}>
        <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb={4}>
          {question.title}
        </Text>

        <RadioGroup
          spacing={5}
          onChange={(e) => setValue(e.target.value)}
          value={value}>
          {question.answers.map((answer, index) => (
            <Radio
              isDisabled={radioDisabled}
              size="lg"
              variantColor="purple"
              value={index}
              key={index}>
              {answer}
            </Radio>
          ))}
        </RadioGroup>

        <Stack isInline align="center" justify="center">
          <Link href="/">
            <Button variantColor="purple" variant="outline" mr={5}>
              Start Over
            </Button>
          </Link>
          <Button
            variantColor="purple"
            isDisabled={submitDisabled}
            onClick={onSubmit}>
            Submit
          </Button>
        </Stack>

        <Collapse isOpen={wrongShow}>
          <Flex direction="column" justify="center" align="center">
            {wrongFeedback}
            <Text>Correct answer: {correctAnswer}</Text>
            {renderedNextButton}
          </Flex>
        </Collapse>

        <Collapse isOpen={correctShow}>
          <Flex direction="column" justify="center" align="center">
            {correctFeedback}
            <Text>Correct answer: {correctAnswer}</Text>
            {renderedNextButton}
          </Flex>
        </Collapse>
      </Stack>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{session.user.name}</ModalHeader>
          <ModalBody>{renderedText()}</ModalBody>
          <ModalFooter>
            <Link href="/score">
              <Button variantColor="purple" mr={3}>
                Check how you rank
              </Button>
            </Link>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {confettiOpen && <Confetti numberOfPieces={150} />}
    </>
  );
};

async function createScore(obj) {
  try {
    const response = await fetch('/api/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(error);
  }
}

export default TriviaCard;
