import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { parseCookies } from 'nookies';

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
  const cookies = parseCookies();
  const session: string | null = cookies.session;
  useEffect(() => {
    if (session) {
      setUser(JSON.parse(session));
    }
  }, [cookies.session]);

  return (
    <AuthenticationContext.Provider value={{ user }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthenticationContext() {
  return useContext(AuthenticationContext);
}
