import { ErrorMessage, Field } from 'formik';

interface FormGroupProps {
  type: string;
  name: string;
  placeholder?: string;
}

export default function FormGroup({ type, name, placeholder }: FormGroupProps) {
  return (
    <div className='mb-5'>
      <Field
        className='block w-full p-2 rounded-sm'
        type={type}
        name={name}
        placeholder={placeholder ?? ''}
      />
      <ErrorMessage
        className='text-sm text-orange-600'
        name={name}
        component='span'
      />
    </div>
  );
}
