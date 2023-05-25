/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useUser } from '../hooks/useUser';
import Aside from '../components/aside/Aside';

export default function RootLayout() {
  const navigate = useNavigate();
  const { setSession } = useUser();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/login');
        return;
      }

      setSession(session);
    });
  }, []);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 gap-6 py-4 px-6 text-white'>
        <h3 className='text-xl'>ToDoApp</h3>
      </header>
      <Outlet />
      <Aside />
    </>
  );
}
