import Link from "next/link";

export default function Home() {
  return (
    <>

      <h1 >Hello, world!</h1>
      <Link href="/about"> About</Link>
      <Link href="/blog"> Blog</Link>
      <Link href="/products"> Products</Link>
    </>
  );
}
