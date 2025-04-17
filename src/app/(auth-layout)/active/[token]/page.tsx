"use client";

import { useParams } from "next/navigation";

import PasswordActivateComponent from "@/components/PasswordActivateComponent";

export default function Active() {
  const params = useParams<{ token: string }>();
  console.log(params.token);
  return (
    <section className="flex items-center justify-center min-h-screen">
      <PasswordActivateComponent />
    </section>
  );
}
