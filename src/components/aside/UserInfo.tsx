import { useUser } from '../../hooks/useUser';
import TextSkeleton from '../skeletons/TextSkeleton';

export default function UserInfo() {
  const { session } = useUser();

  return (
    <div className='px-4 py-3'>
      <span className='block text-sm'>
        {
          session
            ? session.user.user_metadata.full_name
            : <TextSkeleton length='50' />
        }
      </span>
      <span className='block text-sm truncate'>
        {
          session
            ? session.user.email
            : <TextSkeleton length='100' />
        }
      </span>
    </div>
  );
}
