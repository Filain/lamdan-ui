import AuthUserRequired from "@/hok/AuthUserRequired";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="borer-">
      <AuthUserRequired>{children}</AuthUserRequired>
    </main>
  );
}
