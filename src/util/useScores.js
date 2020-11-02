import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useScores = () => {
  const { data, error } = useSWR(`api/scores`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useScores;
