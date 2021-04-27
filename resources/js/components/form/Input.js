import React from "react";

const Input = ({ value, setValue, type, label, ...props }) => {
  const firstUppercase = (string) => {
    const stringUpper = string.charAt(0).toUpperCase();
    return stringUpper + string.slice(1);
  };

  const handleChange = ({ target }) => setValue(target.value);

  return (
    <div className="mb-3">
      <label htmlFor={label} className="m-0">
        {firstUppercase(label)}:
      </label>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        className="form-control"
        id={label}
        aria-describedby={`${label}Help`}
        placeholder={`${label}...`}
        {...props}
      />
    </div>
  );
};

export default Input;
