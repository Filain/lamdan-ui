export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="border-2">{children}</main>;
}
