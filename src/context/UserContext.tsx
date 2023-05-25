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

  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const getTasks = async (uuid: string) => {
    const { data, error, status } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', uuid);
    return { data, error, status };
  };

  return (
    <UserContext.Provider
      value={{
        setSession,
        signInWithGitHub,
        signInWithGoogle,
        signOut,
        getTasks,
        session: userSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
