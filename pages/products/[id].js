import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>产品详情 - {id}</title>
      </Head>

      <Header />

      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>产品编号：{id}</h1>
        <p>这里是产品 {id} 的详细信息。</p>
      </main>

      <Footer />
    </div>
  );
}
