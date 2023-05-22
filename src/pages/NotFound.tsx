import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      NotFound
      <br />
      <Link to='/' className='text-green-800'>Go to Home</Link>
    </div>
  );
}
