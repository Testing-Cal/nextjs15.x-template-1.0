//Navbar.tsx
import Link from 'next/link';
import Head from 'next/head';

export default function Navbar() {
  return (
    <div >
    <Head>
        <title>NextJS14</title>
     </Head>
    <nav style={{margin:'20px'}}>
      <Link href="/" style={{marginRight:'20px'}}>Home</Link>
      <Link href="/dashboard" style={{marginRight:'20px'}}>Dashboard</Link>
      <Link href="/listing">Listing</Link>
    </nav>
      </div>
  );
}