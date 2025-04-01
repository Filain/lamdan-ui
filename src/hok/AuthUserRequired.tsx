"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import { useUserStore } from "@/store/useUserStore";

export default function AuthUserRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();
  const [isLoading, setIsLoading] = useState(true); // Статус завантаження

  useLayoutEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user?.role === "admin") {
      router.push("/login");
    } else {
      setIsLoading(false); // Якщо користувач авторизований і не адмін, зупиняємо завантаження
    }
  }, [user, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Показуємо спінер або текст "Loading..."
  }

  return <>{children}</>;
}
