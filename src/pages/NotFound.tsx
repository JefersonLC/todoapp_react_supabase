import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className='min-h-screen bg-slate-700 flex flex-col items-center justify-center text-center gap-4'>
      <div className='text-white px-2'>
        <h3 className='text-xl md:text-2xl'>
          Error <span className='text-teal-400'>404</span>
        </h3>
        <p className='mt-2 md:text-xl'>
          La ruta especificada no existe:{' '}
          <span className='text-teal-400'>{pathname}</span>
        </p>
      </div>
      <Link
        to='/'
        className='px-4 py-2 rounded-sm text-slate-900 bg-teal-400 hover:bg-slate-900 hover:text-teal-400'
      >
        Volver al inicio
      </Link>
    </div>
  );
}
