import { links } from '../../utils/links';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import LogOutButton from './LogOutButton';
import AsideLink from './AsideLink';

export default function Aside() {
  return (
    <aside className='fixed top-4 z-20 flex justify-end p-2 right-4'>
      <nav className='flex flex-col items-end right-4 top-4 gap-y-4'>
        <div className='flex items-center'>
          <div className='relative group text-[10px]'>
            <Avatar />
            <div
              className={`absolute right-0 z-50 hidden my-4 overflow-hidden
              text-base list-none border divide-y rounded-lg shadow
              top-6 group-focus-within:block bg-slate-900 text-white border-teal-400`}
            >
              <UserInfo />
              <LogOutButton />
            </div>
          </div>
        </div>
        <div className='hidden sm:flex flex-col items-end pr-1 gap-y-4'>
          {links.map((link) => (
            <AsideLink
              key={link.children}
              path={link.path}
              target={link.target}
              icon={<link.icon />}
            >
              {link.children}
            </AsideLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}
