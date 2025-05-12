interface TabItem {
  id: number;
  label: string;
  content: React.ReactNode;
}
interface TabsProps {
  tabs: TabItem[];
  defaultActiveId?: number;
  className?: string;
}

interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
}
interface TableProps<T> {
  data: T[] | null;
  columns: TableColumn<T>[];
  isLoading?: boolean;
  onRowClick?: (row: T) => void;
}