
"use client"
import { useEffect, useState } from "react";

const GetPosts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data,1234 );
      
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {/* {users && users.users &&
        users.users.map((user, index) => (
          <li key={user.id}>
            {user.firstName}
          </li>
        ))
      } */}
    </>
  );
};

export default GetPosts;


// import { useEffect, useState } from "react";

// const GetPosts = () => {
//   const[users,setUsers]=useState([])
//   console.log("users",users)
//    useEffect(()=>{
//     async function fetchUsers() {

//       const data=await fetch("https://dummyjson.com/users")
//       setUsers(await data.json())
//     }
//     fetchUsers()
//    },[])
//   return (
//   <>
//   <h1>users</h1>
//   {users && users.users &&
//     users.users.map(user=>
//       <li key={user.id}>
//         {user.firstName}
//       </li>
//     )
//   }
//   </>  
//   );
// }
 

// export default GetPosts