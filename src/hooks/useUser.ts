import { useContext } from 'react';
import { FormValues, UserContext } from '../context/UserContext';
import { TaskResponse, TasksResponse, AddResponse } from './useUser.d';
import { Session } from '@supabase/supabase-js';

interface Context {
  setSession: (session: Session) => void;
  signInWithGitHub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  getTasks: (uuid: string) => Promise<TasksResponse>;
  getTask: (id: number, uuid: string) => Promise<TaskResponse>;
  addTask: (values: FormValues, user_id: string) => Promise<AddResponse>;
  updateTask: (id: number, values: FormValues) => Promise<AddResponse>;
  session: Session;
}

export function useUser() {
  const context = useContext(UserContext) as Context;
  return context;
}
