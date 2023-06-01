import { Form, Formik, FormikHelpers } from 'formik';
import { Task } from '../../hooks/useUser.d';
import { FormValues } from '../../context/UserContext';
import { formFields } from '../../utils/fieds';
import FormGroup from '../add/FormGroup';
import { taskValidator } from '../../utils/validator';

export default function UpdateForm({
  task,
  submit,
}: {
  task: Task | null;
  submit: (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => Promise<void>;
}) {
  const initialValues: FormValues = {
    title: task?.title,
    description: task?.description,
    limit_date: task?.limit_date,
  };

  return (
    <div className='mt-5 flex flex-col gap-4 2xl:mx-56'>
      <Formik
        initialValues={initialValues}
        validationSchema={taskValidator}
        onSubmit={submit}
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
              {isSubmitting ? 'Actualizando...' : 'Modificar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
