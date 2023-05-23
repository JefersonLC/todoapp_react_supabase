import { Link } from 'react-router-dom';
import Avatar from './Avatar';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 flex bg-zinc-600'>
      <h3>ToDoApp</h3>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Avatar />
    </header>
  );
}
