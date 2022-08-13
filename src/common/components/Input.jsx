const Input = (attr) => {
  const changeHandler = (event) => {
    if (attr.name === 'title') {
      const currentText = event.target.value;
      attr.onChange((oldText) =>
        currentText.length <= 50 ? currentText : oldText
      );
    } else {
      attr.onChange(event.target.value);
    }
  };

  return (
    <>
      {attr.type === 'textarea' ? (
        <textarea
          {...attr}
          className="input textarea"
          value={attr.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      ) : (
        <input
          {...attr}
          className="input"
          spellCheck={false}
          value={attr.value}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default Input;
