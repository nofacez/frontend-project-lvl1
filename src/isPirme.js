// eslint-disable-next-line consistent-return
export default (num) => {
  if (num === 2) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
