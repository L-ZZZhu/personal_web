import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ background: '#0070f3', padding: '1rem', color: 'white' }}>
      <nav >
        <Link href="/">首页</Link> | <Link href="/about" style={{color:'black'}}>关于我们</Link>
      </nav>
    </header>
  );
}