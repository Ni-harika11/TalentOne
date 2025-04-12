import React,{useCallback, useContext} from 'react'
import UserContext from '../components/UserContext'
const Profile = () => {

    const {user}:any=useContext(UserContext)
    if (!user) return <div>Plases Login</div>
  return (
   <div>
    welcome {user.name}
   </div> 
  )
}

export default Profile