import styles from './Table.module.scss';

export const Table = <T,>({ data, columns, isLoading, onRowClick }: TableProps<T>) => {
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.root}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {columns.map((column, index) => (
              <th className={styles.th} key={`header-${index}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data &&
            data.map((row, rowIndex) => (
              <tr
                className={`${styles.tr} ${onRowClick ? styles.clickableRow : ''}`}
                key={`row-${rowIndex}`}
                onClick={() => onRowClick && onRowClick(row)}>
                {columns.map((column, colIndex) => (
                  <td className={styles.td} key={`cell-${rowIndex}-${colIndex}`}>
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : (row[column.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
