import React from "react";

import HeaderComponent from "@/components/HeaderComponent";
import AuthUserRequired from "@/hok/AuthUserRequired";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="borer-">
      <AuthUserRequired>
        <HeaderComponent />
        {children}
      </AuthUserRequired>
    </main>
  );
}
