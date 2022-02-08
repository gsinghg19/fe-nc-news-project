const ErrorMessage = ({ error }) => {
  const msg = error ? error : "Sorry page cannot be found";
  return <h5>{msg}</h5>;
};

export default ErrorMessage;
