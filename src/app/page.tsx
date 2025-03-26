import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/login">Login</Link>
      <Link href="/main">Main</Link>
    </div>
  );
}
