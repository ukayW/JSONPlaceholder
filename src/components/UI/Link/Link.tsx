import { Link } from 'react-router-dom';
import styles from './Link.module.scss';
interface LinkProps {
  to: string;
  label: string;
  active?: boolean;
}

export const AppLink = (props: LinkProps) => {
  const { to, label, active } = props;
  return (
    <Link className={`${styles.root} ${active ? styles.active : ''}`} to={to}>
      {label}
    </Link>
  );
};
