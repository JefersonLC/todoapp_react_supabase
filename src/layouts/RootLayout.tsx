/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useUser } from '../hooks/useUser';
import Header from '../components/Header';

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
      <Header />
      <Outlet />
    </>
  );
}
