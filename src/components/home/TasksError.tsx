export default function TasksError() {
  return (
    <div className='mt-5 text-center text-white border rounded-sm px-4 py-2'>
      <div className='mb-4'>
        <h3 className='text-xl'>
          Error <span className='text-teal-400'>400</span>
        </h3>
      </div>
      <div className='text-lg'>
        <p>Hubo un error durante el proceso</p>
      </div>
      <div className='mt-4 text-sm'>
        <p>
          Inténtelo más tarde <span className='text-teal-400'>;)</span>
        </p>
      </div>
    </div>
  );
}
