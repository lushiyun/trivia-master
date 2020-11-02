import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useScores() {
  const { data, error } = useSWR(`api/scores`, fetcher);

  return {
    scores: data.scores,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useScores;
