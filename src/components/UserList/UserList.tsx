import { useEffect, useState } from 'react';

import styles from './UserList.module.scss';
import { Link } from 'react-router-dom';
import { AppLink } from '../UI/Link/Link';

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async (): Promise<User[] | undefined> => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) throw new Error('Fail fetch users');

      const data = await response.json();

      setIsLoading(false);
      setUsers(data);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {users && (
        <div className={styles.root}>
          {users.map((user) => (
            <AppLink to={`/users/${user.id}`} key={user.id} label={user.email} />
          ))}
        </div>
      )}
    </>
  );
};
