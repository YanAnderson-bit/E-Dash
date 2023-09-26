import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthenticationProviderProps = {
  children: ReactNode;
};

interface IAuthenticationContext {
  user: {
    name: string;
    accessToken: string;
  } | null;
}

const defaultState = {
  user: null,
};

const AuthenticationContext =
  createContext<IAuthenticationContext>(defaultState);

export default function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session: string | null = localStorage.getItem('session');
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthenticationContext() {
  return useContext(AuthenticationContext);
}
