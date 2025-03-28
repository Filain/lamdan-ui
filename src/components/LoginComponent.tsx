"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/form/InputField";
import { authService, IloginData } from "@/services/authService";
import { loginValidator } from "@/validators/loginValidator";

export default function LoginComponent() {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: (variables: IloginData) => authService.login(variables),
    onSuccess: () => {
      router.push("/main");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginData>({
    resolver: joiResolver(loginValidator),
  });

  const formSubmit: SubmitHandler<IloginData> = async (user) => {
    mutate(user);
  };

  // const onSubmit = handleSubmit(async (data) => {
  //   // const response = await authService.login(data.email, data.password);
  //   mutate(data.email, data.password);
  //   // if (response?.status === 200) {
  //   //   console.log("Login successful!");
  //   // }
  //   // if (response === "fulfilled") {
  //   //   console.log();
  //   // }
  // });

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col border-2 w-[400px] p-4">
        {/*<InputField label="Email" name="email" type="text" register={register("email")} />*/}
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Password" {...register("password")} />
        {errors.email?.message && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
        {/*<InputField label="Password" name="password" type="password" register={register("password")} />*/}
        {errors.password?.message && <p className="text-red-500 text-sm">{String(errors.password.message)}</p>}
        <Button type="submit" className="mt-4 p-2 ">
          Login
        </Button>
      </form>
    </div>
  );
}
