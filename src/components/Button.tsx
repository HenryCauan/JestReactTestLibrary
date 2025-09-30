import { type ReactNode } from 'react';

type ButtonProps = {
  disabled: boolean;
  children: ReactNode;
  onClick?: (number: number) => void;
};

const Button = ({ disabled, children, onClick }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: disabled ? "red" : "blue" }}
      onClick={onClick ? () => onClick(10) : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;