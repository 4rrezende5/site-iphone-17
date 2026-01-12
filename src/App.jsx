
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Highlights from './components/Highlights.jsx'
import Colors from './components/Colors.jsx'
import Footer from './components/Footer.jsx'




function App() {

  return (
    <>
      {/* Fundo da navbar borrado na cor laranja  */}
      <h1 className='  bg-amber-600 '>iPhone 17</h1>
      <Navbar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Footer />
    </>
  )
}

export default App;
