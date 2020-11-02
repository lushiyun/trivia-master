const parseSeconds = (number) => {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number - hours * 3600) / 60);
  const seconds = number - hours * 3600 - minutes * 60;
  return `${hours}: ${minutes} : ${seconds}`;
};

export default parseSeconds;