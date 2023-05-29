import { Ring } from '@uiball/loaders';

export default function SessionError() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-700'>
      <div className='text-white text-center flex flex-col items-center gap-2'>
        <h3 className='md:text-xl'>Conectando con la sesión...</h3>
        <Ring color='white' />
      </div>
    </div>
  );
}
