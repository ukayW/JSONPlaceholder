import { useFetch } from '../../hooks/useFetch';
import styles from './UserAlbums.module.scss';

export const UserAlbums = ({ userId }: { userId: string | undefined }) => {
  const { data, isLoading, error } = useFetch<Album[]>(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No album found</div>;
  return (
    <div className={styles.root}>
      {data.map((al) => (
        <p className={styles.albumItem} key={al.id}>
          {al.title} <img src="https://placehold.co/150x100" alt="" />
        </p>
      ))}
    </div>
  );
};
