"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import { authService } from "@/services/authService";
import { useUserStore } from "@/store/useUserStore";

export default function AuthUserRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const pathname = usePathname();
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true); // Статус завантаження
  // const { data, isSuccess } = useQuery({ queryKey: ["me"], queryFn: () => authService.me(), onSuccess: (data) => setUser(data) });
  // if (!user && isSuccess) {
  //   setUser();
  // }

  useLayoutEffect(() => {
    if (!user) {
      const checkAuth = async () => {
        try {
          if (!user) {
            const user = await authService.me();
            if (user) {
              setUser(user);
            }
          } else {
            router.push("/login");
          }
        } finally {
          setLoading(false);
        }
      };
      checkAuth();
    }

    if (user?.role === "admin") {
      router.push("/login");
    } else {
      setLoading(false); // Якщо користувач авторизований і не адмін, зупиняємо завантаження
    }
  }, [user, router]);

  if (loading) {
    return <div>Loading...</div>; // Показуємо спінер або текст "Loading..."
  }

  return <>{children}</>;
}
