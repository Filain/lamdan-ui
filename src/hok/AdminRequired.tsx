"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/app/loading";
import { useUserStore } from "@/store/useUserStore";

export default function AdminRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, logout } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      if (user.role !== "admin") {
        router.replace("/main");
      } else {
        setLoading(false);
      }
    } else {
      // Якщо юзера нема - теж редірект на логін
      router.replace("/login");
      logout();
    }
  }, [router, logout]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}
