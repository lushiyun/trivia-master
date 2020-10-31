import {
  Text,
  Stack,
  FormControl,
  RadioGroup,
  Radio,
  Button,
  useToast,
} from '@chakra-ui/core';

const TriviaCard = ({ question }) => {
  const [value, setValue] = React.useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast({
        title: 'Error',
        description: 'You must select an answer',
        status: 'error',
        duration: '5000',
        isClosable: true,
      });
    }
  };

  const handleStartOver = (e) => {
    e.preventDefault();
  };

  return (
    <Stack borderWidth="1px" rounded="lg" width="100%" p={8} spacing={8}>
      <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb={4}>
        {question.title}
      </Text>
      <FormControl>
        <RadioGroup
          spacing={5}
          onChange={(e) => setValue(e.target.value)}
          value={value}>
          {question.answers.map((answer, index) => (
            <Radio value={index} variantColor="purple">
              {answer}
            </Radio>
          ))}
        </RadioGroup>
      </FormControl>
      <Stack isInline spacing={5} align="center" justify="center">
        <Button
          variantColor="purple"
          variant="outline"
          onClick={handleStartOver}>
          Start Over
        </Button>
        <Button variantColor="purple" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export default TriviaCard;
