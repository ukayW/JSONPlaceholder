import { useFetch } from '../../hooks/useFetch';

export const UserAlbums = ({ userId }: { userId: string | undefined }) => {
  const { data, isLoading, error } = useFetch<Album[]>(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No album found</div>;
  return (
    <div>
      {data.map((al) => (
        <p key={al.id}>
          {al.title} <img src="https://placehold.co/100x150" alt="" />
        </p>
      ))}
    </div>
  );
};
