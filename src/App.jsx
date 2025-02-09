import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './page/blog/home'
import About from './page/blog/About'
import SingleBlog from './page/blog/SingleBlog'
import CreateBlog from './page/blog/CreateBlog'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateBlog/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
