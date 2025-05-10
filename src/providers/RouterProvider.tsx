import { Route, Routes } from 'react-router-dom';
import { Users } from '../pages/Users';
import { Home } from '../pages/Home';
import { User } from '../pages/User';

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
    </Routes>
  );
};
