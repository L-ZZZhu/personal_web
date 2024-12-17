import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
     <Header />
      <Head>
        <title>我的 Next.js 网站</title>
        <meta name="description" content="这是一个 Next.js 示例网站" />
      </Head>


      <main className={styles.container}>
        <h1 className={styles.title}>欢迎来到我的 Next.js 网站</h1>
        <p>使用了 Head、组件化、CSS 样式和动态路由。</p>
        <img src="/logo.png" alt="Logo" className={styles.image} />
      </main>

      <Footer />
    </div>
  );
}
