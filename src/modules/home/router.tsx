import { lazy } from 'react'
import { PATHS } from './paths'
import { FAKE_DELAY_ROUTER } from '@/shared/constants'

const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_ROUTER))
  return import('./pages/Home')
})

const Routes = [
  {
    path: `/${PATHS.BASE_MODULE.CLI}`,
    key: 'HOME',
    exact: true,
    element: () => <Home />,
  },
]

export default Routes
