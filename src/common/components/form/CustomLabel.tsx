type ComponentProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const CustomLabel = ({ children, icon }: ComponentProps) => {
  return (
    <label
      htmlFor="links"
      className="flex items-center gap-2 text-sm font-semibold"
    >
      {icon}
      {children}
    </label>
  );
};

export default CustomLabel;
