import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useQuestions = () => {
  const { data, error } = useSWR('/api/questions', fetcher);

  return {
    questions: data.questions,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useQuestions;
