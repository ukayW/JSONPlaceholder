import { Header } from '@/components'
import { RouterProvider } from '@/providers'
import { ThemeProvider } from './components/contexts/ThemeContext'
import { ThemeToggle } from './components/UI/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <ThemeToggle />
        <Header />
        <RouterProvider />
      </div>
    </ThemeProvider>
  )
}

export default App
