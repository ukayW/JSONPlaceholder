import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [isAlbumsLoading, setIsAlbumsLoading] = useState<boolean>(true);
  const [albumsError, setAlbumsError] = useState<Error | null>(null);

  const fetchUser = async (): Promise<User[] | undefined> => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!response.ok) throw new Error('Fail fetch users');

      const data = await response.json();

      setIsLoading(false);
      setUser(data);

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

  const fetchAlbums = async (): Promise<Album[] | undefined> => {
    try {
      setIsAlbumsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);

      if (!response.ok) throw new Error('Fail fetch users');

      const data = await response.json();

      setIsAlbumsLoading(false);
      setAlbums(data);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        setAlbumsError(error);
      } else {
        setAlbumsError(new Error('An unknown error occurred'));
      }
    } finally {
      setIsAlbumsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchAlbums();
  }, []);

  return (
    <div>
      {/* User Info */}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {user && (
        <>
          <p>User id: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>City: {user.address.city}</p>
          <p>Lat: {user.address.geo.lat}</p>
          <p>Lng: {user.address.geo.lng}</p>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
          <p>Company catchPhrase: {user.company.catchPhrase}</p>
          <p>Company bs: {user.company.bs}</p>
        </>
      )}

      {/* Albums */}
      <h2>Albums:</h2>
      {isAlbumsLoading && <div>Loading...</div>}
      {albumsError && <div>Error: {albumsError.message}</div>}
      {albums &&
        albums.map((al) => (
          <p key={al.id}>
            {al.title} <img src="https://placehold.co/100x150" alt="" />
          </p>
        ))}

      {/* Posts */}
    </div>
  );
};
