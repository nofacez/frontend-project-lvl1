export default (num1, num2, op) => {
  switch (op) {
    case '+':
      return (num1 + num2).toString();
      break;
    case '-':
      return (num1 - num2).toString();
      break;
    case '*':
      return (num1 * num2).toString();
      break;
    default:
      break;
  }
};
