import { useUser } from '../../hooks/useUser';

export default function LogOutButton() {
  const { signOut } = useUser();

  return (
    <button
      onClick={signOut}
      className='flex w-full px-4 py-2 text-sm transition hover:bg-tekhelet hover:text-honeydew'
    >
      Logout
    </button>
  );
}
