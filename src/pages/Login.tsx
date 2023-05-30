import GitHubIcon from '../components/icons/GitHubIcon';
import GoogleIcon from '../components/icons/GoogleIcon';
import AuthButton from '../components/login/AuthButton';
import FooterWave from '../components/svg/FooterWave';
import HeaderWave from '../components/svg/HeaderWave';
import { useUser } from '../hooks/useUser';

export default function Login() {
  const { signInWithGitHub, signInWithGoogle } = useUser();

  const authButtons = [
    {
      provider: 'github',
      icon: <GitHubIcon />,
      children: 'Iniciar Sesión con GitHub',
      action: signInWithGitHub,
    },
    {
      provider: 'google',
      icon: <GoogleIcon />,
      children: 'Iniciar Sesión con Google',
      action: signInWithGoogle,
    },
  ];

  return (
    <div className='min-h-screen relative flex items-center justify-center bg-slate-700'>
      <div className='absolute top-0 w-full'>
        <HeaderWave />
      </div>
      <section className='mx-6 py-8 gap-24 max-w-[342px] bg-slate-800 md:max-w-min z-10 text-white'>
        <div className='px-6 md:px-8'>
          <h2 className='font-[chocopy] text-4xl text-center md:text-5xl'>
            ToDoApp
          </h2>
          <p className='mt-4 text-justify md:mt-6 md:text-lg'>
            Bienvenido a nuestra aplicación, donde tu productividad es nuestra
            prioridad. Convierte el caos en orden y deja que nuestro asistente
            te guíe en la administración de tus tareas. Mejora tu enfoque y
            logra más en menos tiempo. BLA BLA BLA...
          </p>
        </div>
        <div className='mt-8 px-6 flex flex-col gap-4 items-center justify-center md:mt-10 md:px-8'>
          {authButtons.map((button) => (
            <AuthButton
              key={button.provider}
              provider={button.provider}
              icon={button.icon}
              action={button.action}
            >
              {button.children}
            </AuthButton>
          ))}
        </div>
      </section>
      <div className='absolute bottom-0 w-full'>
        <FooterWave />
      </div>
    </div>
  );
}
