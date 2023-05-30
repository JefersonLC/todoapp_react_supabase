/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Task } from '../hooks/useUser.d';
import SessionError from '../components/home/SessionError';
import LoadingTaks from '../components/home/LoadingTaks';
import TasksError from '../components/home/TasksError';

export default function UpdateTask() {
  const { id } = useParams();
  const { session, getTask } = useUser();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (session) {
        const uuid = session.user.id;
        const { error, data } = await getTask(Number(id), uuid);

        if (error) {
          setError(error);
        } else {
          setTask(data);
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
        <h4 className='text-xl text-white'>Modifica o elimina:</h4>
        {
          loading 
            ? <LoadingTaks /> 
            : error 
              ? <TasksError />
              : (
                <div className='mt-5 flex flex-col gap-4'>{task?.id}</div>
              )
        }
      </div>
    </main>
  );
}
