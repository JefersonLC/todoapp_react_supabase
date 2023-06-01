/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { FormikHelpers } from 'formik';
import { PostgrestError } from '@supabase/supabase-js';
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Task } from '../hooks/useUser.d';
import { FormValues } from '../context/UserContext';
import SessionError from '../components/home/SessionError';
import LoadingTaks from '../components/home/LoadingTaks';
import TasksError from '../components/home/TasksError';
import UpdateForm from '../components/update/UpdateForm';
import Modal from '../components/modal/Modal';

export default function UpdateTask() {
  const { id } = useParams();
  const { session, getTask, updateTask } = useUser();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | null>(null);

  const [updateError, setUpdateError] = useState(false);
  const [modal, setModal] = useState(false);

  const obtainTask = async () => {
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
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const { error } = await updateTask(Number(id), values);

    if (error) {
      setUpdateError(true);
    }

    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 5000);

    obtainTask()
    actions.setSubmitting(false);
  };

  useEffect(() => {
    obtainTask()
  }, [session]);

  if (!session) {
    return <SessionError />;
  }

  return (
    <>
      <main className='min-h-screen pt-20 px-5 bg-slate-700'>
        <div className='mt-6 mb-2'>
          <h4 className='text-xl text-white'>Modifica o elimina:</h4>
          {loading 
            ? <LoadingTaks /> 
            : error 
              ? <TasksError /> 
              : !task 
                ? 'Error'
                : <UpdateForm task={task} submit={handleSubmit} />
          }
        </div>
      </main>
      <Modal error={updateError} show={modal} />
    </>
  );
}
