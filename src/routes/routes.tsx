import { PATHS } from '@/modules/home/paths'
import { NotFound } from '@/shared/pages'
import { Navigate } from 'react-router-dom'
import homeRoutes from '@/modules/home/router'

const generalsRoutes = [
  {
    path: '/',
    key: 'INDEX',
    exact: true,
    element: () => <Navigate to={`/${PATHS.BASE_MODULE.CLI}`} />,
  },
  {
    path: '*',
    key: 'all',
    element: () => <Navigate to='404' />,
  },
  {
    path: '404',
    key: '404',
    element: () => <NotFound />,
  },
]

const routes = [...generalsRoutes, ...homeRoutes]

export default routes
