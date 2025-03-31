"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputText from "@/components/ui/form/InputText";
import { authService, IloginData } from "@/services/authService";
import { loginValidator } from "@/validators/loginValidator";
import InputPassword from "@/components/ui/form/InputPassword";

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
        <InputText {...register("email")} label={"Email"} />
        <p className="text-red-500 text-sm h-4">{errors.email?.message ? String(errors.email?.message) : ""}</p>
        <InputPassword {...register("password")} label={"Password"} />
        <p className="text-red-500 text-sm h-4">{errors.password?.message ? String(errors.password?.message) : ""}</p>
        <Button type="submit" className="mt-4 p-2 ">
          Login
        </Button>
      </form>
    </div>
  );
}
