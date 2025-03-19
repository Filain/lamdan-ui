import { FC } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
}

const InputField: FC<InputFieldProps<FieldValues>> = ({
  label,
  name,
  type = "text",
  register,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <input {...register(name)} type={type} className="border p-2 rounded" />
    </div>
  );
};

export default InputField;
