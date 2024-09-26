import { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Body from './component/BODY/Body.jsx'
import Footer from './component/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Body/>
        <Footer/>
    </>
  )
}

export default App
