import { useUser } from '../../hooks/useUser';

export default function LogOutButton() {
  const { signOut } = useUser();

  return (
    <button
      onClick={signOut}
      className={`flex w-full px-4 py-2 text-sm transition border-teal-400
      hover:bg-teal-400 hover:text-black`}
    >
      Cerrar Sesión
    </button>
  );
}
