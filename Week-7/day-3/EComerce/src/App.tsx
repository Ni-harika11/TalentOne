import Header from './common/Header/index'
import Footer from './common/Footer'
import { BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import LoginSignUp from './componets/LogIn_SignUP/index'
import Home from './componets/Home'
import './index.css'
import { useState } from 'react'
function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/login' element={<LoginSignUp type='login' setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/signup' element={<LoginSignUp type='signup' setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* If user is not authenticated, redirect to login */}
        <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to='/login' />} />
        
        {/* Catch-all route (Optional) */}
        <Route path='*' element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
      <Footer />
   {/* <Header/> */}
    {/* <Routes>
     
      <Route path='/login' element={<LoginSignUp type='login'/>}/>
      <Route path='/signup' element={<LoginSignUp type='signup'/>}/>
      <Route path='/' element={<Home/>}/>
      
      {/* <Route
      path='/'
      element={ */}
        {/* <> */}
        {/* <Header/> */}
         
        {/* <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<div>No problem , go to Home</div>}/>

        </Routes> */}
        {/* <Footer/> */}
        {/* </> */}
      {/* // }/> */}
    
    {/* </Routes>  */}
    {/* <Footer/> */}
    </BrowserRouter>











    {/* <BrowserRouter>
    <Header/>
      <Routes>
       
        <Route path='/login' element={<LoginSignUp type='login'/>}>Login</Route>
        <Route path='/*' element={<div>no probmem go to home</div>}>Login</Route>
        <Route path='/' element={<LoginSignUp type='signup'/>}>Login</Route>
        
      </Routes>
      
    </BrowserRouter> */}
     
      
    </>
  )
}

export default App
