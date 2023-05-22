import { useUser } from '../hooks/useUser';

export default function Login() {
  const { sigInWithGitHub } = useUser();

  return (
    <div>
      <button onClick={sigInWithGitHub}>Login con GitHub</button>
    </div>
  );
}
