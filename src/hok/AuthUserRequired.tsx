"use client";

import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import Loading from "@/app/loading";
import { authService } from "@/services/authService";
import { useUserStore } from "@/store/useUserStore";

export default function AuthUserRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await authService.me();
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push("/login");
        }
      } catch (e: unknown) {
        if (e instanceof AxiosError && e.response?.status === 401) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    // Перевіряємо користувача лише якщо його ще немає
    if (!user) {
      checkAuth();
    } else {
      setLoading(false); // Якщо користувач вже є, зупиняємо завантаження
    }
  }, [setUser, user, router]);

  // Показуємо лише спінер під час перевірки автентифікації
  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}
