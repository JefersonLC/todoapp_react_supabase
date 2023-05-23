import { useUser } from '../hooks/useUser';
import AvatarSkeleton from './skeletons/AvatarSkeleton';

export default function Avatar() {
  const { session } = useUser();

  if (!session) {
    return <AvatarSkeleton />;
  }

  return (
    <div>
      <img
        src={session.user.user_metadata.avatar_url}
        className='rounded-full'
        width={35}
        height={35}
        alt='User avatar'
      />
    </div>
  );
}
