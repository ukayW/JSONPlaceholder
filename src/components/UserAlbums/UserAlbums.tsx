import { useFetch } from '@/hooks'
import styles from './UserAlbums.module.scss'

export const UserAlbums = ({ userId }: { userId: string | undefined }) => {
  const { data, isLoading, error } = useFetch<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
  const images = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No album found</div>

  console.log(data)

  return (
    <div className={styles.root}>
      {data.map((al) => (
        <p className={styles.albumItem} key={al.id}>
          <div className={styles.grid}>
            {images.map(() => (
              <img className={styles.img} src="https://placeholder.pagebee.io/api/random/100/100" />
            ))}
          </div>
          <h3>{al.title}</h3>
        </p>
      ))}
    </div>
  )
}
