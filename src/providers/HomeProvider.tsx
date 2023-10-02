import { ReactNode, createContext, useContext } from 'react';

const HomeContext = createContext<any>({});

type HomeProviderProps = {
  data: any;
  children: ReactNode;
};
export default function HomeProvider({ data, children }: HomeProviderProps) {
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
}

export function useHomeContext() {
  return useContext(HomeContext);
}
