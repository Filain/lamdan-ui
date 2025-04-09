"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputPassword from "@/components/ui/form/InputPassword";
import InputText from "@/components/ui/form/InputText";
import { authService, IloginData } from "@/services/authService";
import { useUserStore } from "@/store/useUserStore";
import { loginValidator } from "@/validators/loginValidator";

export default function LoginComponent() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const queryClient = useQueryClient();
  const { setUser } = useUserStore();
  // const { mutate } = useMutation({
  //   mutationFn: (variables: IloginData) => authService.login(variables),
  //   onSuccess: (data) => {
  //     setUser(data);
  //
  //     router.push("/main");
  //   },
  //   onError: (error: AxiosError) => {
  //     if (error.status === 404) {
  //       setErrorMessage("Login or password is incorrect");
  //     } else {
  //       setErrorMessage("Error");
  //     }
  //   },
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginData>({
    resolver: joiResolver(loginValidator),
  });

  const formSubmit: SubmitHandler<IloginData> = async (user) => {
    setErrorMessage(null);
    authService
      .login(user)
      .then((data) => {
        if (data) {
          setUser(data);
          router.push("/main");
        }
      })
      .catch((error: AxiosError) => {
        if (error.status === 404) {
          setErrorMessage("Login or password is incorrect");
        } else {
          setErrorMessage("Error");
        }
      });

    // mutate(user);
  };

  return (
    <div className=" h-[calc(100vh-150px)] flex items-center justify-center ">
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col border-2 border-green-800 rounded-xl w-[400px] p-4">
        <InputText {...register("email")} label={"Email"} />
        <p className="text-red-500 text-sm h-4">{errors.email?.message ? String(errors.email?.message) : ""}</p>
        <InputPassword {...register("password")} label={"Password"} />
        <p className="text-red-500 text-sm h-4">{errors.password?.message ? String(errors.password?.message) : ""}</p>
        <Button type="submit" className="mt-4 p-2 ">
          Login
        </Button>
        {errorMessage ? <p className="text-red-500 text-sm h-4 text-center">{errorMessage}</p> : <p className="h-4"></p>}
      </form>
    </div>
  );
}
