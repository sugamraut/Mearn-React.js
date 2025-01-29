import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './page/blog/home'
import About from './page/blog/About'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
