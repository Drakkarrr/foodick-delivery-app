import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/user-profile' element={<h1>UserProfilePage</h1>} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
