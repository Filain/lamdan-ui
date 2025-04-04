import { ReactNode } from "react";

interface IButtonProps {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
  icon?: boolean;
}

export default function Button({ icon = false, onClick, disabled, className, type, children }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className} text-lg mb-1 ${icon ? "px-1 py-1" : "px-6 py-2"} bg-green-800 text-white rounded-lg 
   transition-all duration-200 active:scale-85 hover:bg-green-700 hover:scale-105 cursor-pointer`}
    >
      {children}
    </button>
  );
}
