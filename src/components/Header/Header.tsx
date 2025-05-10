import { Link } from 'react-router';

export const Header = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/users'}>Users</Link>
    </div>
  );
};
