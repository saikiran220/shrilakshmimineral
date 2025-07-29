import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import MainNav from "./components/homeComponents/MainNav"
import ContactNav from "./components/homeComponents/ContactNav"
import Footer from "./components/homeComponents/Footer.jsx"

function App() {
  return (
    <>
      <ContactNav />
      <MainNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/products" element={<HomePage/>}/>
          <Route path="/gallery" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
