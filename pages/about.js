import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>关于我们</title>
        <meta name="description" content="了解我们公司" />
      </Head>

      <Header />

      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>关于我们</h1>
        <p>这是一个简单的 About 页面。</p>
      </main>

      <Footer />
    </div>
  );
}
