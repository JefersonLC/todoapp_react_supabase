import { Link } from 'react-router-dom';

interface MenuLinkProps {
  path: string;
  children: string;
  target: string;
  icon: JSX.Element;
}

function MenuLink({ path, children, icon, target }: MenuLinkProps) {
  return (
    <Link
      className='flex flex-col items-center gap-1 px-5 py-3 text-center text-white hover:text-teal-400'
      to={path}
      target={target}
    >
      {icon}
      <span className='text-sm'>{children}</span>
    </Link>
  );
}

export default MenuLink;
