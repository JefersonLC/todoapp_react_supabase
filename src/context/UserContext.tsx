import { ReactNode, createContext, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabase';

export const UserContext = createContext({});

export interface FormValues {
  title: string;
  description: string;
  limit_date: string;
}

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

  const getTask = async (id: number, uuid: string) => {
    const { data, error, status } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', uuid)
      .eq('id', id)
      .maybeSingle();
    return { data, error, status };
  };

  const addTask = async (values: FormValues, user_id: string) => {
    const { status, statusText, error } = await supabase
      .from('tasks')
      .insert({ ...values, user_id });
    return { status, statusText, error };
  };

  return (
    <UserContext.Provider
      value={{
        setSession,
        signInWithGitHub,
        signInWithGoogle,
        signOut,
        getTasks,
        getTask,
        addTask,
        session: userSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
