import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-solid border-black/[.08] bg-white px-16 py-2">
      <Link
        className="flex h-12 items-center justify-center gap-2 text-2xl font-bold text-black font-sans"
        href="/"
      >
        Dipfolio
      </Link>
      <div className="flex w-full items-center justify-center px-16 py-2 absolute left-0 right-0">
        <nav className="flex items-center gap-6 text-md font-medium text-black">
          <Link href="/about">About</Link>
          <Link href="/projects">Experience</Link>
          <Link href="/contact">Projects</Link>
          <Link href="/contact">Social</Link>
      </nav>
      </div>
    </header>
  );
}