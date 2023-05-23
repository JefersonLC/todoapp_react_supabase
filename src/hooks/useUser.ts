import { useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { UserContext } from '../context/UserContext';

interface Context {
  setSession: (session: Session) => void;
  signInWithGitHub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  session: Session;
}

export function useUser() {
  const context = useContext(UserContext) as Context;
  return context;
}
