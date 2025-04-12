// import { useEffect, useState } from "react";
// const FetchAPIData=()=>{
//     const API="http://localhost:3000/users";
//     const [data,setData]=useState([]);
//     const DataFromAPI=()=>{
//         return fetch(API)
//         .then((response)=>response.json())
//         .then((data)=>setData(data))
//         console.log(data)
//     }
//     useEffect(()=>{
//         DataFromAPI()
//     },[])
//         return(
//         <>
//         <div>
//             <h2>Store data</h2>
//             {data.map(()=>)}
//         </div>
//         </>
//     )
// }
// export default FetchAPIData;