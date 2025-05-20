import { Header } from '@/components'
import { RouterProvider } from '@/providers'
import { ThemeProvider } from '@/providers'
import { ThemeToggle } from '@/components/UI'

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
