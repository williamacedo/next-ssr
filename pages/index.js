import Link from "next/link";

const Index = () => (
  <div>
    <h1>SRR Magician</h1>
    <Link href="/robots">
      <a>Robots</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Index;
