import { useUser } from '../../hooks/useUser';
import AvatarSkeleton from '../skeletons/AvatarSkeleton';

export default function Avatar() {
  const { session } = useUser();

  if (!session) {
    return <AvatarSkeleton />;
  }

  return (
    <button className='rounded-full ring-4 hover:ring-honeydew focus:ring-honeydew'>
      <img
        src={session.user.user_metadata.avatar_url}
        className='w-8 h-8 transition rounded-full'
        width={35}
        height={35}
        alt='User avatar'
      />
    </button>
  );
}
