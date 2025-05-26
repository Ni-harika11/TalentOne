import { FormEvent } from "react"
import { useRouter } from "next/navigation"
const LoginPage = () => {
    const router=useRouter()
    async function handlesubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData=new FormData(e.currentTarget)
        const email=formData.get('email')
        const password=formData.get('password')

        const response=await fetch('/api/login',{
            method:"POST",
            headers:{'Conetnt-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        if(response.ok){
            router.push('/profile')
        }else{
            console.log('error')
        }
    }
  return (
     <>
     <form onSubmit={handlesubmit}>
        <input type="text" name="username" placeholder="Enter your name"/>
        <input type="text" name="password" placeholder="Enter you password"/>
        <button type="submit">Login</button>
     </form>
     </>
  )
}

export default LoginPage