import { Button as MantineButton, type ButtonProps } from "@mantine/core";

type ComponentProps = {
  onClick?: () => void;
} & ButtonProps;

const Button = ({ children, onClick, ...props }: ComponentProps) => {
  return (
    <MantineButton {...props} onClick={onClick}>
      {children}
    </MantineButton>
  );
};

export default Button;
