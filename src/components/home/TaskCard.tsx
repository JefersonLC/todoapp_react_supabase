import { Task } from '../../hooks/useUser';

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className='bg-teal-400 rounded-sm px-2 py-3 min-w-[290px]'>
      <div className='px-4 flex items-center gap-2'>
        <span className='text-[9px]'>#{task.id}</span>
        <h5 className='flex-grow'>{task.title}</h5>
        <span className='text-[9px]'>
          {new Date(task.created_at).toLocaleDateString()}
        </span>
      </div>
      <div className='px-4 mt-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>{task.description}</p>
          <p className='text-[9px]'>
            Target: {new Date(task.limit_date).toLocaleDateString()}
          </p>
        </div>
        <div className='mt-2'>buttons</div>
      </div>
    </div>
  );
}
