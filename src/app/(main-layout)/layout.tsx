export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="borer-">{children}</main>;
}
