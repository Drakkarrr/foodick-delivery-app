import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>HomePage</h1>} />
      <Route path='/user-profile' element={<h1>UserProfilePage</h1>} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
