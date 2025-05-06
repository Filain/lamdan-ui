"use client";

import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import Loading from "@/app/loading";
import { authService } from "@/services/authService";
import { useUserStore } from "@/store/useUserStore";

export default function AuthUserRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { user, setUser, logout } = useUserStore();
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await authService.me();
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.replace("/");
          logout();
        }
      } catch (e: unknown) {
        if (e instanceof AxiosError && e.response?.status === 403) {
          router.replace("/");
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [logout, setUser, user, router]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;
}
