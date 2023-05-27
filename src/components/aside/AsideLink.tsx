import { Link } from 'react-router-dom';

interface AsideLinkProps {
  path: string;
  children: string;
  target: string;
  icon: JSX.Element;
}

export default function AsideLink({
  path,
  children,
  target,
  icon,
}: AsideLinkProps) {
  return (
    <Link
      to={path}
      target={target}
      className={`items-center justify-center text-md font-semibold
      flex group text-white hover:text-teal-400 gap-x-2`}
    >
      <span
        className={`transition-all translate-x-4 opacity-0 group-hover:opacity-100
        group-hover:translate-x-0 bg-slate-900 px-[7px] p-[2px] rounded-md`}
      >
        {children}
      </span>
      {icon}
    </Link>
  );
}
