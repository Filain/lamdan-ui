"use client";

import { useForm } from "react-hook-form";

import InputField from "@/components/ui/form/InputField";

export default function LoginComponent() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(() => console.log("submit"))}
        className="flex flex-col border-2 w-min"
      >
        <InputField label="Email" name="email" register={register} />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
