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
}
