const Button = ({ label, event, type = 'button', disabled = false }) => {
  return (
    <button type={type} onClick={event} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
