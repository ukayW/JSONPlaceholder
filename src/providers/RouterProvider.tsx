import { Route, Routes } from 'react-router-dom';
import { User, Users, Home } from '@/pages';

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
};
