import { lazy } from 'react'
import { PATHS } from './paths'
import { FAKE_DELAY_ROUTER } from '@/shared/constants'
import { Primary } from '@/shared/layouts'

const Builder = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_ROUTER))
  return import('./pages/Builder')
})

const Routes = [
  {
    path: `/${PATHS.BASE_MODULE.CLI}`,
    key: 'BUILDER',
    exact: true,
    element: () => (
      <Primary>
        <Builder />
      </Primary>
    ),
  },
]

export default Routes
