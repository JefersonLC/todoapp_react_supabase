import HomeIcon from '../components/icons/HomeIcon';
import AddIcon from '../components/icons/AddIcon';
import ReportIcon from '../components/icons/ReportIcon';

export const links = [
  {
    path: '/',
    children: 'Inicio',
    target: '_self',
    icon: HomeIcon,
  },
  {
    path: '/add',
    children: 'Agregar tarea',
    target: '_self',
    icon: AddIcon,
  },
  {
    path: 'https://github.com/JefersonLC/todoapp_react_supabase/issues',
    children: 'Reportar error',
    target: '_blank',
    icon: ReportIcon,
  },
];
