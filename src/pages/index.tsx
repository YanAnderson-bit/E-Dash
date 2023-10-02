import { useAuthenticationContext } from '@/providers/AuthenticationProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { user } = useAuthenticationContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
      return;
    }
    router.push('/login');
  }, []);
}
