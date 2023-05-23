import Avatar from './Avatar';
import ReportIcon from '../icons/ReportIcon';
import UserInfo from './UserInfo';
import LogOutButton from './LogOutButton';

export default function Aside() {
  return (
    <aside className='fixed top-4 z-20 flex justify-end p-2 right-4'>
      <nav className='flex flex-col items-end right-4 top-4 gap-y-4'>
        <div className='flex items-center'>
          <div className='relative group'>
            <Avatar />
            <div
              className={`absolute right-0 z-50 hidden my-4 overflow-hidden
        text-base list-none border divide-y rounded-lg shadow
        top-6 group-focus-within:block bg-roseQuartz`}
            >
              <UserInfo />
              <LogOutButton />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end pr-1 gap-y-4'>
          <a
            href='https://github.com/JefersonLC/todoapp_react_supabase/issues'
            target='_blank'
            className={`items-center justify-center text-md font-semibold text-roseQuartz
            flex group hover:text-honeydew gap-x-2`}
          >
            <span
              className={`transition-all translate-x-4 opacity-0 group-hover:opacity-100
              group-hover:translate-x-0`}
            >
              Report
            </span>
            <ReportIcon />
          </a>
        </div>
      </nav>
    </aside>
  );
}
