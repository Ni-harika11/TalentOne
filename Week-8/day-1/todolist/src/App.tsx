import Login from './components/Login'
import './App.css'
import Signup from './components/Signup'
import Home from './common/Layout/Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Todo from './components/Todo'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/todos' element={<Todo/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
