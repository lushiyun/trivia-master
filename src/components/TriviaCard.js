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
  Link as ChakraLink,
} from '@chakra-ui/core';
import Link from 'next';

const TriviaCard = ({ question, updateScore, updateActive }) => {
  const [value, setValue] = React.useState(null);
  const [correctShow, setCorrectShow] = React.useState(false);
  const [wrongShow, setWrongShow] = React.useState(false);
  const [radioDisabled, setRadioDisabled] = React.useState(false);
  const [submitDisabled, setSubmitDisabled] = React.useState(false);

  const toast = useToast();

  const correctAnswer = question.answers[question.correctIndex];
  let correct;

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

    correct = +value === question.correctIndex;
    correct ? setCorrectShow(true) : setWrongShow(true);
    setRadioDisabled(true);
    setSubmitDisabled(true);
    updateScore(correct);
  };

  const handleNext = () => {
    updateActive();
    setRadioDisabled(false);
    setCorrectShow(false);
    setWrongShow(false);
    setSubmitDisabled(false);
  };

  const handleToggle = () => {
    console.log('in here');
  };

  return (
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

      <Stack isInline spacing={5} align="center" justify="center">
        <ChakraLink as={Link} to="/">
          <Button variantColor="purple" variant="outline">
            Start Over
          </Button>
        </ChakraLink>
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
          <IconButton
            onClick={handleNext}
            mt={4}
            size="lg"
            aria-label="next question"
            icon="chevron-right"
          />
        </Flex>
      </Collapse>

      <Collapse isOpen={correctShow}>
        <Flex direction="column" justify="center" align="center">
          {correctFeedback}
          <Text>Correct answer: {correctAnswer}</Text>
          <IconButton
            onClick={handleNext}
            mt={4}
            size="lg"
            aria-label="next question"
            icon="chevron-right"
          />
        </Flex>
      </Collapse>
    </Stack>
  );
};

const correctFeedback = (
  <>
    <Text>
      <span role="img" aria-label="party popper">
        🎉
      </span>{' '}
      Yay! You got it right!
    </Text>
  </>
);

const wrongFeedback = (
  <>
    <Text>
      <span role="img" aria-label="Sad but Relieved Face">
        😥
      </span>{' '}
      Darn! You're so close!
    </Text>
  </>
);

export default TriviaCard;
