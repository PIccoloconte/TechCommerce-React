import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`bg-gray-50 border outline-none ${
        error && touched ? "border-red-900" : "border-gray-300"
      } text-gray-900 rounded-lg block w-full p-2.5`}
      placeholder={label}
    />
    {error && touched ? (
      <p className="mt-2 text-sm text-right text-red-700">{error}</p>
    ) : (
      <div className="h-2"></div>
    )}
  </div>
);

export default InputField;
