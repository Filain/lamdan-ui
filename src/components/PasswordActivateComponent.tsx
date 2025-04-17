"use client";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputPassword from "@/components/ui/form/InputPassword";
import { passwordValidator } from "@/validators/passwordValidator";

interface IPassword {
  password: string;
  confirm_password: string;
}

export default function PasswordActivateComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({
    resolver: joiResolver(passwordValidator),
  });
  return (
    <>
      <form
        className="flex flex-col border-2 border-green-800 rounded-xl w-[300px] p-4 bg-white"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <InputPassword {...register("password")} label="Password" />
        <p className="text-red-500 text-sm h-4">{errors.password?.message ? String(errors.password?.message) : ""}</p>
        <InputPassword {...register("confirm_password")} label="Confirm Password" />
        <p className="text-red-500 text-sm h-4">{errors.confirm_password?.message ? String(errors.confirm_password?.message) : ""}</p>
        <div className="flex justify-center items-center">
          <Button type="submit">Submit</Button>{" "}
        </div>
      </form>
    </>
  );
}
