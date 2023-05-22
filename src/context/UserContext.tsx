import { ReactNode, createContext, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabase';

export const UserContext = createContext({});

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userSession, setUserSession] = useState<Session | null>(null);

  const setSession = (session: Session | null) => {
    setUserSession(session);
  };

  const sigInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  return (
    <UserContext.Provider
      value={{ setSession, sigInWithGitHub, session: userSession }}
    >
      {children}
    </UserContext.Provider>
  );
}
