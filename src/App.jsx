import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { LinkIP } from './components/LinkIp'

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
