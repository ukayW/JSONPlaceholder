import { useFetch } from '@/hooks';
import { Avatar } from '@/components/UI';
import { UserTabs } from '@/components';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ userId }: { userId: string | undefined }) => {
  const { data, isLoading, error } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <Avatar />
        <div className={styles.userNameWrapper}>
          <span className={styles.userName}>
            {data.username} #{data.id}
          </span>
          <p className={styles.userNameEmail}>{data.email}</p>
          <a className={styles.userNamePhone} href={`tel:${data.phone.split(' ')[0]}`}>
            {data.phone.split(' ')[0]}
          </a>
          <a className={styles.userNameWebsite} href={`https://${data.website}`} target="_blank">
            {data.website}
          </a>
        </div>
      </div>
      <UserTabs data={data} />
    </div>
  );
};
