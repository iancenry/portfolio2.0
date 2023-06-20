import { Routes, Route } from 'react-router-dom'
import { Home, Projects, About, Contact, NotFound } from './Pages'
import { Layout } from './Components'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />◘
        <Route path="/projects" element={<Projects />} />◘
        <Route path="/about" element={<About />} />◘
        <Route path="/contact" element={<Contact />} />◘
        <Route path="*" element={<NotFound />} />◘
      </Route>
    </Routes>
  )
}

export default App
