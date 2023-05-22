import { useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { UserContext } from '../context/UserContext';

interface Context {
  setSession: (session: Session) => void;
  session: Session;
  sigInWithGitHub: () => Promise<void>;
}

export function useUser() {
  const context = useContext(UserContext) as Context;
  return context;
}
