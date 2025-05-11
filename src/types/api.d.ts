interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface Album{
  userId: number,
  id: number,
  title: string
}

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