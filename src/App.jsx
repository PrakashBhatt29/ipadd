import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { LinkIP } from './LinkIP'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link" element={<LinkIP />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
