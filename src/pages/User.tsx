import { useParams } from 'react-router-dom';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { UserAlbums } from '../components/UserAlbums/UserAlbums';

export const User = () => {
  const { id } = useParams();

  return (
    <div>
      {/* User Info */}
      <UserInfo userId={id} />
      {/* Albums */}
      <UserAlbums userId={id} />
      {/* Posts */}
    </div>
  );
};
