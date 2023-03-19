import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import About from './pages/about/about'
import Reservation from './pages/reservation/reservation'


function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
