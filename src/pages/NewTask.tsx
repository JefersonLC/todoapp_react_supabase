import { Field, Formik, Form } from 'formik';
import { createTaskForm } from '../utils/validator';

export default function NewTask() {
  interface FormValues {
    title: string;
    description: string;
    limit_date: string;
  }

  const initialValues: FormValues = {
    title: '',
    description: '',
    limit_date: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <main className='min-h-screen pt-20 px-5 sm:px-20 md:px-36 lg:px-60 xl:px-96 bg-slate-700'>
      <div className='mt-6 mb-2 2xl:mx-56'>
        <h4 className='text-xl text-white'>Agrega una tarea:</h4>
      </div>
      <div className='mt-5 flex flex-col gap-4 2xl:mx-56'>
        <Formik
          initialValues={initialValues}
          validationSchema={createTaskForm}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type='text' name='title' placeholder='Título' />
            <Field type='text' name='description' placeholder='Descripción' />
            <Field type='date' name='limit_date' />
            <button type='submit'>Agregar</button>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
