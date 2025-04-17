export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-green-300 h-screen ">{children}</main>;
}
