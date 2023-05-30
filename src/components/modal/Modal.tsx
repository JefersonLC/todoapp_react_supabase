import ErrorIcon from '../icons/ErrorIcon';
import SuccessIcon from '../icons/SuccessIcon';

interface ModalProps {
  error: boolean;
  show: boolean;
}

export default function Modal({ error, show }: ModalProps) {
  const position = show
    ? 'right-6 sm:right-20 md:right-36 lg:right-60 xl:right-96 2xl:mx-56'
    : '-right-96';

  const color = error 
    ? 'text-red-600' 
    : 'text-teal-400';

  const border = error 
    ? 'border-red-600' 
    : 'border-teal-400';

  const title = error 
    ? 'Error' 
    : 'Éxito';

  const message = error
    ? 'Error al crear'
    : 'Se guardó la tarea correctamente';

  const icon = error 
    ? <ErrorIcon /> 
    : <SuccessIcon />;

  return (
    <div
      className={`fixed bottom-80 bg-slate-900  p-4 
      rounded-sm transition-all ${position} ${color}`}
    >
      <h3 className='text-xl'>{title}</h3>
      <hr className={`my-2 ${border}`} />
      <div className='flex gap-2 items-center'>
        <p>{message}</p>
        {icon}
      </div>
    </div>
  );
}
