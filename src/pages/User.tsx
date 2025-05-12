import { useParams } from 'react-router-dom';
import { UserInfo, UserMedia } from '@/components';

export const User = () => {
  const { id } = useParams();

  return (
    <div>
      <UserInfo userId={id} />
      <UserMedia id={id} />
    </div>
  );
};
