/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useUser } from '../hooks/useUser';
import { links } from '../utils/links';
import Aside from '../components/aside/Aside';
import MenuLink from '../components/menu/MenuLink';

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
      <header className='fixed top-0 left-0 right-0 gap-6 py-4 px-6 text-white bg-slate-700'>
        <h3 className='text-xl'>ToDoApp</h3>
      </header>
      <Outlet />
      <Aside />
      <footer className='pb-24 sm:pb-2 bg-slate-700'>
        <p className='text-center text-white'>
          Desarrollado por{' '}
          <a
            href='https://github.com/JefersonLC'
            target='_blank'
            className='text-teal-400 hover:underline'
          >
            @JefersonLC
          </a>{' '}
          - {new Date().getFullYear()}
        </p>
      </footer>
      <div className='fixed bottom-0 left-0 right-0 bg-slate-900 grid grid-cols-3 sm:hidden'>
        {links.map((link) => (
          <MenuLink
            key={link.children}
            path={link.path}
            icon={<link.icon />}
            target={link.target}
          >
            {link.children}
          </MenuLink>
        ))}
      </div>
    </>
  );
}
