import styles from './UserList.module.scss';
import { AppLink } from '../UI/Link/Link';
import { useFetch } from '../../hooks/useFetch';

export const UserList = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="userList">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {users && (
        <div className={styles.root}>
          {users.map((user) => (
            <AppLink to={`/users/${user.id}`} key={user.id} label={user.email} />
          ))}
        </div>
      )}
    </div>
  );
};
