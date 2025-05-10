import { UserAlbums } from '../../UserAlbums/UserAlbums';
import { UserPosts } from '../../UserPosts/UserPosts';
import { Tabs } from '../Tabs/Tabs';

import styles from './UserMedia.module.scss';

export const UserMedia = ({ id }: { id: string | undefined }) => {
  const tabs = [
    {
      id: 0,
      label: 'Album',
      content: (
        <>
          <UserAlbums userId={id} />
        </>
      ),
    },
    {
      id: 1,
      label: 'Posts',
      content: (
        <>
          <UserPosts />
        </>
      ),
    },
  ];

  return <Tabs className={styles.root} tabs={tabs} defaultActiveId={0} />;
};
