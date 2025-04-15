// 3. Implement a Simple Throttle
//  Description: Implement a throttle function that ensures a function is called at most once every X milliseconds.
//  Example Usage: Scroll events
//  Concepts: Closures, setTimeout, performance optimization


const  mythrottle=(fun,delay)=>{
    return function(...args){
        document.getElementById("myid").disabled=true
        setTimeout(()=>{
            fun()
        },delay)
    }
}
const myfunc=mythrottle(()=>{
    document.getElementById("myid").disabled=false
    console.log("User clicked..")
},3000)