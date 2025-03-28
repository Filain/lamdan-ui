"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/form/InputField";
import { authService } from "@/services/authService";
import { loginValidator } from "@/validators/loginValidator";

export default function LoginComponent() {
  const [data, setData] = useState();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginValidator),
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await authService.login(data.email, data.password);
    setData(response);
    console.log(response?.status);
    if (response?.status === 200) {
      console.log("Login successful!");
    }
    // if (response === "fulfilled") {
    //   console.log();
    // }
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col border-2 w-[400px] p-4">
        <InputField label="Email" name="email" register={register} />
        {errors.email?.message && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
        <InputField label="Password" name="password" type="password" register={register} />
        {errors.password?.message && <p className="text-red-500 text-sm">{String(errors.password.message)}</p>}
        <Button type="submit" className="mt-4 p-2 ">
          Login
        </Button>
      </form>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
