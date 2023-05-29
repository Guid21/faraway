import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './RootPage';
import PersonPage from './PersonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/people/:peopleId',
    element: <PersonPage />,
  },
]);

const Pages = () => <RouterProvider router={router} />;

export default Pages;
