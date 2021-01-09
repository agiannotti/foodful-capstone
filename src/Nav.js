import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/mission'>Home</Link>
        </li>
        <li>
          <Link to='/locate'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Home</Link>
        </li>
        <li>
          <Link to='/help'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Home</Link>
        </li>
        <li>
          <Link to='/logout'>Home</Link>
        </li>
      </ul>
    </nav>
  );
}
