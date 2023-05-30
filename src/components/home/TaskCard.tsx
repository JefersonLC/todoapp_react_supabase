import { Link } from 'react-router-dom';
import { Task } from '../../hooks/useUser.d';

interface TaskCardProps {
  index: number;
  task: Task;
}

export default function TaskCard({ index, task }: TaskCardProps) {
  return (
    <div className='bg-teal-400 rounded-sm px-2 py-3 min-w-[290px]'>
      <div className='px-4 flex items-center gap-2'>
        <span className='text-[9px]'>#{index + 1}</span>
        <h5 className='flex-grow'>{task.title}</h5>
        <span className='text-[9px]'>
          {new Date(task.created_at).toLocaleDateString()}
        </span>
      </div>
      <div className='px-4 mt-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>{task.description}</p>
          <p className='text-[9px]'>
            Límite: {new Date(task.limit_date).toLocaleDateString()}
          </p>
        </div>
        <div className='mt-4 mb-2'>
          <Link
            to={'/update/' + task.id}
            className={`px-4 py-2 bg-slate-900 rounded-sm text-teal-400
            text-sm hover:bg-inherit hover:text-slate-900 hover:border
            hover:border-slate-900`}
          >
            Modificar
          </Link>
        </div>
      </div>
    </div>
  );
}
