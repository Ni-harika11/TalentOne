import { Children } from "react";

const CommonLayout=({
    children
}:{children:any})=>{
    return(
        <>
         <div>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
         </div>
        </>
    )
}
export default CommonLayout