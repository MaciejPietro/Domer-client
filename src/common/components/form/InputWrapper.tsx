const InputWrapper = ({ title, children }: any) => {
  return (
    <label
      htmlFor="email"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      <div>{title}</div>
      {children}
    </label>
  );
};

export default InputWrapper;
