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
  useColorMode,
  Link as ChakraLink,
  Input,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';
import { collection, addDoc } from 'firebase/firestore';

import { correctFeedback, wrongFeedback } from '../util/feedback';
import StatCard from './StatCard';
import database from '../util/firebaseConfig';

const TriviaCard = ({ question, updateActive, isLast }) => {
  const { colorMode } = useColorMode();

  const initialRef = React.useRef(null);

  const [name, setName] = React.useState('');
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
    } else {
      updateActive();
      setRadioDisabled(false);
      setCorrectShow(false);
      setWrongShow(false);
      setSubmitDisabled(false);
      setTimerActive(true);
    }
  };

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const submitScore = async () => {
    setIsLoading(true);

    const scoreObj = {
      name,
      score,
      seconds,
    };

    try {
      const score = await addDoc(collection(database, 'scores'), scoreObj);
      setIsLoading(false);
      router.push(`/score`);
    } catch (e) {
      console.error(error);
      window.alert('Error adding score');
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
        <Box pb={6}>
          <Text>
            <span role="img" aria-label="Star-Struck">
              🤩
            </span>{' '}
            Wow! Perfect score!!!
          </Text>
        </Box>
      );
    } else {
      return (
        <Box pb={6}>
          <Text>
            You scored {score} in {seconds} seconds.{' '}
            <Link href="/">
              <ChakraLink
                color={colorMode === 'light' ? 'purple.500' : 'purple.100'}
                onClick={() => setConfettiOpen(false)}
              >
                Try again
              </ChakraLink>
            </Link>{' '}
            for a perfect score! Or
          </Text>
        </Box>
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
          value={value}
        >
          {question.answers.map((answer, index) => (
            <Radio
              isDisabled={radioDisabled}
              size="lg"
              variantColor="purple"
              value={index}
              key={index}
            >
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
            onClick={onSubmit}
          >
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

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalBody pb={6}>
            {renderedText()}

            <Flex alignItems="end">
              <FormControl flexGrow={1}>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name to record your score"
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              isDisabled={name.length < 1}
              loadingText="Submitting"
              variantColor="purple"
              mr={3}
              onClick={() => {
                setConfettiOpen(false);
                submitScore();
              }}
            >
              Submit
            </Button>

            <Link href="/">
              <Button onClick={onClose}>Restart</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {confettiOpen && <Confetti />}
    </>
  );
};

export default TriviaCard;
