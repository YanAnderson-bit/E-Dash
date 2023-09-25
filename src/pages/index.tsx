import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const session: any = JSON.parse(localStorage.getItem('session') || '');
    if (session.accessToken) {
      router.push('/dashboard');
    }
    router.push('/login');
  }, []);

  return (
    <>
      <Head>
        <title>E-Dash</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main />
    </>
  );
}
