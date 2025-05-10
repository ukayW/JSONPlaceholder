import { useParams } from 'react-router-dom';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { UserMedia } from '../components/UI/UserMedia/UserMedia';

export const User = () => {
  const { id } = useParams();

  return (
    <div>
      <UserInfo userId={id} />
      <UserMedia id={id} />
    </div>
  );
};
