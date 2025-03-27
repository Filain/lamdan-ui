import { ReactNode } from "react";

interface IButtonProps {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ onClick, disabled, className, type, children }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className}  text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-lg 
      transition-all duration-200 active:scale-95 hover:bg-green-800`}
    >
      {children}
    </button>
  );
}
