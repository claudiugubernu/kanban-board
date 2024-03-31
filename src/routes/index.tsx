import { RouteObject } from 'react-router';
import Layout from '../layout';
import Boards from '../pages/Boards';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: '',
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    path: '/boards',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: '',
            element: <Boards />,
          },
        ],
      },
    ],
  },
];

export default routes;
