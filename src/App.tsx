import { ChakraProvider } from '@chakra-ui/react'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'sonner'
import { FullScreen } from '@/shared/components/loaders'
import customTheme from './theme'
import RenderRoutes from './routes/renderRoutes'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Suspense fallback={<FullScreen />}>
        <Toaster
          visibleToasts={5}
          position='bottom-right'
        />
        <Router>
          <RenderRoutes />
        </Router>
      </Suspense>
    </ChakraProvider>
  )
}

export default App
