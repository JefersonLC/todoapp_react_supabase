/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser';
import { Task } from '../hooks/useUser.d';
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
        const { error, data } = await getTasks(uuid);

        if (error) {
          setError(error);
        } else {
          setTasks(data);
        }
      }
      setLoading(false);
    })();
  }, [session]);

  if (!session) {
    return <SessionError />;
  }

  return (
    <main className='min-h-screen pt-20 pb-6 px-5 sm:px-20 md:px-36 lg:px-60 xl:px-96 bg-slate-700'>
      <div className='mt-6 mb-2 2xl:mx-56'>
        <h4 className='text-xl text-white'>Lista de tareas:</h4>
      </div>
      {
        loading 
          ? <LoadingTaks /> 
          : error 
            ? <TasksError />
            : (
              <div className='mt-5 flex flex-col gap-4 2xl:mx-56'>
                {tasks?.map((task, index) => (
                  <TaskCard key={task.id} index={index} task={task} />
                ))}
              </div>
            )
      }

    </main>
  );
}
