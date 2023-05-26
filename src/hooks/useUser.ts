import { useContext } from 'react';
import { PostgrestError, Session } from '@supabase/supabase-js';
import { UserContext } from '../context/UserContext';

export interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
  user_id: string;
  limit_date: string;
}

interface Response {
  error: PostgrestError | null;
  status: number;
}

interface TasksResponse extends Response {
  data: Task[] | null;
}

interface TaskResponse extends Response {
  data: Task | null;
}

interface Context {
  setSession: (session: Session) => void;
  signInWithGitHub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  getTasks: (uuid: string) => Promise<TasksResponse>;
  getTask: (id: number, uuid: string) => Promise<TaskResponse>;
  session: Session;
}

export function useUser() {
  const context = useContext(UserContext) as Context;
  return context;
}
