"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";
import { authService } from "@/services/authService";

export default function HeaderComponent() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const logout = () => {
    queryClient.clear();
    authService.logout();
    router.replace("/login");
  };
  return (
    <header className="flex justify-between items-center h-16 bg-green-200">
      <p className="ml-5 text-4xl font-bold text-green-800 drop-shadow-xl">Logo</p>
      <div className="">
        <Button className="mr-5" icon={true}>
          <Icons name="user" className=" w-10 h-10 fill-transparent stroke-white  stroke-1" />
        </Button>
        <Button className="mr-5" icon={true} onClick={logout}>
          <Icons name="logout" className="w-10 h-10 fill-transparent stroke-white   stroke-2" />
        </Button>
      </div>
    </header>
  );
}
