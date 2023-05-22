import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h3>ToDoApp</h3>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <div></div>
    </header>
  );
}
