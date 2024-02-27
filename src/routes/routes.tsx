import { PATHS } from '@/modules/builder/paths'
import { NotFound } from '@/shared/pages'
import { Navigate } from 'react-router-dom'
import builderRoutes from '@/modules/builder/router'
import settingsRoutes from '@/modules/settings/router'

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

const routes = [...generalsRoutes, ...builderRoutes, ...settingsRoutes]

export default routes
