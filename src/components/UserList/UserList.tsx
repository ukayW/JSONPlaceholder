import { useNavigate } from 'react-router-dom'
import { Table } from '@/components/UI'
import { useFetch } from '@/hooks'
import styles from './UserList.module.scss'

export const UserList = () => {
  const navigate = useNavigate()
  const { data: users, isLoading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
  const columns: TableColumn<User>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'Name',
      accessor: 'name',
    },
    { header: 'Email', accessor: 'email' },
  ]
  const handleRowClick = (user: User) => {
    navigate(`/users/${user.id}`)
  }
  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div className={styles.root}>
      <Table data={users} columns={columns} onRowClick={handleRowClick} />
    </div>
  )
}
