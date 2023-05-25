import { ReactNode } from 'react';

interface AuthButtonProps {
  provider: string;
  icon: ReactNode;
  children: string;
  action: () => Promise<void>;
}

interface ButtonStyles {
  [key: string]: string;
}

export default function AuthButton({
  provider,
  icon,
  children,
  action,
}: AuthButtonProps) {
  const buttonStyle: ButtonStyles = {
    github: `bg-black text-honeydew hover:bg-white
      hover:text-black [&>svg]:hover:fill-black`,
    google: `bg-[#ea4335] text-honeydew hover:bg-white
      hover:text-[#ea4335] [&>svg]:hover:fill-[#ea4335]`,
  };

  return (
    <button
      onClick={action}
      className={`flex gap-4 items-center justify-center py-2 px-4 
      rounded-sm transition-all ${buttonStyle[provider]}`}
    >
      {children}
      {icon}
    </button>
  );
}
