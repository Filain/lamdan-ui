"use client";
import { FC, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import Icons from "@/components/ui/Icons";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  options?: Record<string, string>;
}

const InputField: FC<InputFieldProps<FieldValues>> = ({ label, name, type = "text", register, options }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col relative">
      <label className="mb-1 font-medium">{label}</label>
      {type === "select" && options ? (
        <select {...register(name)} className="border p-2 rounded w-full">
          {Object.entries(options).map(([value, display]) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input
            {...register(name)}
            type={type === "password" && !showPassword ? "password" : "text"}
            className="border p-2 rounded w-full pr-10"
          />
          {type === "password" && (
            <button type="button" onClick={togglePassword} className="absolute inset-y-0 right-2 flex items-center ">
              {showPassword ? (
                <Icons name="eye-closed" className="w-8 h-8 fill-green-900 stroke-green-900" />
              ) : (
                <Icons name={"eye"} className="w-8 h-8 fill-green-900 stroke-green-900" />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
