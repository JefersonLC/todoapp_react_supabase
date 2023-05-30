import { PostgrestError } from '@supabase/supabase-js';

interface Response {
  error: PostgrestError | null;
  status: number;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
  user_id: string;
  limit_date: string;
}

export interface AddResponse extends Response {
  statusText: string;
}

export interface TasksResponse extends Response {
  data: Task[] | null;
}

export interface TaskResponse extends Response {
  data: Task | null;
}
