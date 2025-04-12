import React, { useEffect, useState } from 'react'
import './login_signUp.css'
import Dashboard from '../Dashboard/dasboard'
const Login_Sigup = () => {
    // const [data,setData]=useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmpassword, setConfirmPassword] = useState<string>('')
    const [showSubmit, setShowSubmit] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [actions, setAction] = useState("Login")
    const [islogIn, setLogedIn] = useState(false)
    const [address, setAddress] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const [phone, setPhone] = useState()
    const [website, setWebsite] = useState<string>('')
    const [company, setCompany] = useState<string>('')

    // Email validation function
    useEffect(() => {
        if (actions === "Sign Up") {
            setShowSubmit(!!(name && email && password && confirmpassword && company && role && website && phone && address));
        } else {
            setShowSubmit(!!(email && password));
        }
    }, [actions, name, email, password, confirmpassword,company,address,website,role]);

    const isValidEmail = (email: string) => {
        return /^[a-zA-Z0-9+_.%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };
    // Password validation function
    const isValidPassword = (password: string) => {
        return password.length >= 6;
    };

    const handlesubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (actions === "Login") {
            if (!email || !password) {
                setError("Email and password are required!");
                return;
            }
            if (!isValidEmail(email)) {
                setError("Invalid email format!");
                return;
            }
            try {
                const res = await fetch("http://localhost:3000/users")
                const users = await res.json()
                console.log(users)
                const user = users.find((user: any) =>
                    user.email === email &&
                    user.password === password)
                if (user) {
                    setLogedIn(true)
                    setError("")
                } else {
                    setLogedIn(false)
                }
            } catch {
                alert("Plsea do sign Up .")
            }

        }
        if (actions === "Sign Up") {
            if (name === '' || email === '' || password === '' || confirmpassword === ''|| role==='' ||website==='' || company==='' || phone==='') {
                setError("All fields are required!");
                return;
            }
            if (!isValidEmail(email)) {
                setError("Invalid email format!");
                return;
            }
            if (!isValidPassword(password)) {
                setError("Password must be at least 6 characters long!");
                return;
            }
            if (password !== confirmpassword) {
                setError("Passwords do not match!");
                return;
            }
            
            if(!/^\d{10}$/.test(phone)){
                setError("Phone number must be 10 digit .")
                return ;
            }

            // Create user object
            const newUser = { name, email, password, confirmpassword,role,address,company,website };

            try {
                const response = await fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });

                if (response.ok) {
                    alert("Signup successful! User data stored.");
                    setError("");
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setAddress("")
                    setCompany("")
                    setRole("")
                    setPhone()
                } else {
                    setError("Failed to store user data.");
                }
            }
            catch (error) {
                console.error("Error:", error);
                setError("Something went wrong. Please try again.");
            }
        }
    };

    // Redirect to Dashboard if logged in
    if (islogIn) return <Dashboard />;
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{actions}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                     {/* Email Field (Always Displayed) */}
                     <div className='input'>
                        <img src='' alt='' />
                        <input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    {/* Show additional fields only if Sign Up is selected */}
                    {actions === "Sign Up" && (
                        <>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='text' placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='text' placeholder='Enter your Role' onChange={(e) => setRole(e.target.value)} value={role} />
                            </div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='number' placeholder='Enter your phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='text' placeholder='Enter your website' onChange={(e) => setWebsite(e.target.value)} value={website} />
                            </div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='text' placeholder='Enter your company name' onChange={(e) => setCompany(e.target.value)} value={company} />
                            </div>
                            
                        </>
                    )}

                   

                    {/* Password Field (Always Displayed) */}
                    <div className='input'>
                        <img src='' alt='' />
                        <input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>

                    {/* Confirm Password (Only for Sign Up) */}
                    {actions === "Sign Up" && (
                        <div className='input'>
                            <img src='' alt='' />
                            <input type='password' placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} />
                        </div>
                    )}

                    {/* Error Message (if any) */}
                    {error && <p className="error-message">{error}</p>}

                    {/* Forgot Password (Only for Login) */}
                    {actions === "Login" && (
                        <div className='forgot-password'>
                            Lost Password? <span>Click here</span>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="parent-container">
                        <div className='submits'>
                            <button type='submit' onClick={(e) => handlesubmit(e)} disabled={!showSubmit}>Submit</button>
                        </div>
                    </div>

                    {/* Login/Signup Toggle */}
                    <div className='submit-container'>
                        <div className={actions === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                        <div className={actions === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login_Sigup