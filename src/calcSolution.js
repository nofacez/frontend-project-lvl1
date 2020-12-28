/* eslint-disable consistent-return */
export default (num1, num2, op) => {
  switch (op) {
    case '+':
      return (num1 + num2).toString();

    case '-':
      return (num1 - num2).toString();

    case '*':
      return (num1 * num2).toString();

    default:
      break;
  }
};
