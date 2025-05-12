import { Tabs } from '@/components/UI';
import styles from './UserTabs.module.scss';

export const UserTabs = ({ data }: { data: User }) => {
  const tabs = [
    {
      id: 0,
      label: 'Address',
      content: (
        <>
          <p>City: {data.address.city}</p>
          <p>Street: {data.address.street}</p>
          <p>Lat: {data.address.geo.lat}</p>
          <p>Lng: {data.address.geo.lng}</p>
          <p>Suite: {data.address.suite}</p>
          <p>Zipcode: {data.address.zipcode}</p>
        </>
      ),
    },
    {
      id: 1,
      label: 'Company',
      content: (
        <>
          <p>{data.company.name}</p>
          <p>{data.company.catchPhrase}</p>
          <p>{data.company.bs}</p>
        </>
      ),
    },
  ];

  return <Tabs className={styles.root} tabs={tabs} defaultActiveId={0} />;
};
