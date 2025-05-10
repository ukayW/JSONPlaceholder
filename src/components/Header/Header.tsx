import styles from './Header.module.scss';
import { AppLink } from '../UI/Link/Link';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const currentPath = useLocation().pathname;
  const appPaths = [
    { to: '/home', label: 'Home' },
    { to: '/users', label: 'Users' },
  ];
  return (
    <div className={styles.nav}>
      {appPaths.map((path) => (
        <AppLink
          key={path.to}
          to={path.to}
          label={path.label}
          active={currentPath.startsWith(path.to)}
        />
      ))}
    </div>
  );
};
