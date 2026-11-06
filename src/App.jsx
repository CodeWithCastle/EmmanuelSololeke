import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Partners from './pages/Partners/Partners.jsx'
import ResourceTeam from './pages/ResourceTeam/ResourceTeam.jsx'
import Services from './pages/Services/Services.jsx'
import Properties from './pages/Properties/Properties.jsx'
import Insights from './pages/Insights/Insights.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/resource" element={<ResourceTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
