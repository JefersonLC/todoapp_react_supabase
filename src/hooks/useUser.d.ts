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

export interface AddResponse {
  status: string;
  statusText: string;
  error: {
    message: PostgrestError | null;
  };
}

export interface TasksResponse extends Response {
  data: Task[] | null;
}

export interface TaskResponse extends Response {
  data: Task | null;
}
