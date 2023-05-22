import { useUser } from '../hooks/useUser';

export default function Home() {
  const { session } = useUser();

  if (session === null) {
    return <div>Cargando...</div>;
  }

  return <div>Home</div>;
}
