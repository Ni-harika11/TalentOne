import './App.css'
import Login from './component/Login'
import Profile from './component/profile'
import UserContextProvider from './components/UserContextProvider'
 function App() {
 
  return (
    <>
    <UserContextProvider>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

      <Login/>
      <Profile/>
    </UserContextProvider>
   
    </>
  )
}

export default App
