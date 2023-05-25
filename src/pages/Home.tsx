/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { Task, useUser } from '../hooks/useUser';
import { PostgrestError } from '@supabase/supabase-js';
import SessionError from '../components/home/SessionError';
import LoadingTaks from '../components/home/LoadingTaks';
import TasksError from '../components/home/TasksError';
import TaskCard from '../components/home/TaskCard';

export default function Home() {
  const { session, getTasks } = useUser();
  const [tasks, setTasks] = useState<Task[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (session) {
        const uuid = session.user.id;
        const response = await getTasks(uuid);
    
        if (response.error) {
          setError(response.error);
        } else {
          setTasks(response.data);
        }
      }
      setLoading(false);
    })();
  }, [session]);

  if (!session) {
    return <SessionError />;
  }

  return (
    <main className='min-h-screen pt-20 px-5 bg-slate-700'>
      <div className='mt-6 mb-2'>
        <h4 className='text-xl text-white'>Tasks list:</h4>
      </div>
      {
        loading
          ? <LoadingTaks />
          : error
              ? <TasksError />
              : (
                <div className='mt-5 flex flex-col gap-4'>
                  {tasks?.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              )
      }
    </main>
  );
}
