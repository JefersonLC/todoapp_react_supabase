import { useUser } from '../hooks/useUser';

export default function About() {
  const { signOut } = useUser();
  
  return (
    <div>
      About
      <br />
      <button onClick={signOut}>Login con GitHub</button>
    </div>
  );
}
