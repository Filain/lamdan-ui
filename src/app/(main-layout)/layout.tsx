import React from "react";

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import AuthUserRequired from "@/hok/AuthUserRequired";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col  h-screen">
      <HeaderComponent />
      <div className="flex-grow">
        <AuthUserRequired>{children}</AuthUserRequired>
      </div>
      <FooterComponent />
    </main>
  );
}
