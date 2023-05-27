import { Field, Formik, Form } from "formik";

export default function NewTask() {
  return (
    <main className='min-h-screen pt-20 px-5 sm:px-20 md:px-36 lg:px-60 xl:px-96 bg-slate-700'>
      <div className='mt-6 mb-2 2xl:mx-56'>
        <h4 className='text-xl text-white'>Agrega una tarea:</h4>
      </div>
      <div className='mt-5 flex flex-col gap-4 2xl:mx-56'>
        <Formik>
          <Form>
            <Field type='text' name='title' placeholder='Título'/>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
