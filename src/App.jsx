import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import About from './pages/about/about'


function App() {
  return (
    <>
      <Header />
      <div className="header-space" style={{ height: '85px' }}></div>

      {/* if in /, pass appbar-change to Header */}

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
