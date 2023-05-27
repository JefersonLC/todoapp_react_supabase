import { useUser } from '../../hooks/useUser';
import UserInfoSkeleton from '../skeletons/UserInfoSkeleton';

export default function UserInfo() {
  const { session } = useUser();

  return (
    <div className='px-4 py-3 text-sm'>
        {
          session
            ? (
              <>
                <p>{session.user.user_metadata.full_name}</p>
                <hr className='my-2'/>
                <p>{session.user.email}</p>
              </>
            )
            : <UserInfoSkeleton />
        }

    </div>
  );
}
