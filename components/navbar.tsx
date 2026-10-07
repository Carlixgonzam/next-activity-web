import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 p-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/features">Features</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/about">About</Link>
      <form action="/search" className="ml-auto">
        <input
          type="search"
          name="q"
          placeholder="Search"
          aria-label="Search"
          className="border rounded px-2 py-1"
        />
      </form>
    </nav>
  );
}
