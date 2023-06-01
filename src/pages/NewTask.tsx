import { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { taskValidator } from '../utils/validator';
import { FormValues } from '../context/UserContext';
import { useUser } from '../hooks/useUser';
import { formFields } from '../utils/fieds';
import FormGroup from '../components/add/FormGroup';
import Modal from '../components/modal/Modal';

export default function NewTask() {
  const { session, addTask } = useUser();
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);

  const initialValues: FormValues = {
    title: '',
    description: '',
    limit_date: '',
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const id = session.user.id;
    const { error } = await addTask(values, id);

    if (error) {
      setError(true);
    }

    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 5000);

    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <>
      <main className='min-h-screen pt-20 px-5 sm:px-20 md:px-36 lg:px-60 xl:px-96 bg-slate-700'>
        <div className='mt-6 mb-2 2xl:mx-56'>
          <h4 className='text-xl text-white'>Agrega una tarea:</h4>
        </div>
        <div className='mt-5 flex flex-col gap-4 2xl:mx-56'>
          <Formik
            initialValues={initialValues}
            validationSchema={taskValidator}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='px-4 py-6 bg-slate-900'>
                {formFields.map((field) => (
                  <FormGroup
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                ))}
                <button
                  className='bg-teal-400 p-2 rounded-sm hover:text-teal-400 hover:bg-slate-700'
                  type='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Agregando...' : 'Agregar'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      <Modal error={error} show={modal} />
    </>
  );
}
