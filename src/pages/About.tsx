import { supabase } from '../supabase';

export default function About() {
  return (
    <div>
      About
      <br />
      <button
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        Login con GitHub
      </button>
    </div>
  );
}
