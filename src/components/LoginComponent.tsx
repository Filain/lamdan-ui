"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import InputField from "@/components/ui/form/InputField";
import { loginValidator } from "@/validators/loginValidator";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginValidator),
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit(() => console.log("submit"))}
        className="flex flex-col border-2 w-[400px] p-4"
      >
        <InputField label="Email" name="email" register={register} />
        {errors.email?.message && (
          <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
        )}
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
        />
        {errors.password?.message && (
          <p className="text-red-500 text-sm">
            {String(errors.password.message)}
          </p>
        )}
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
