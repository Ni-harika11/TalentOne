const API_URL: string = "http://localhost:3000";
const API_URL_USER: string = `${API_URL}/users`;
type User ={
  email: string;
  password: string;
  role: string;
  username: string;
}
type UserData= {
  fname: string;
  lname: string;
  email: string;
  address: string;
  password: string;
  role: string;
  phone: string;
  website: string;
  company: string;
}

function getFormData(): UserData {
  return {
    fname: (document.getElementById('fname') as HTMLInputElement).value.trim(),
    lname: (document.getElementById('lname') as HTMLInputElement).value.trim(),
    email: (document.getElementById('email') as HTMLInputElement).value.trim(),
    address: (document.getElementById('address') as HTMLInputElement).value.trim(),
    password: (document.getElementById('password') as HTMLInputElement).value.trim(),
    role: (document.getElementById('role') as HTMLSelectElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value.trim(),
    website: (document.getElementById('website') as HTMLInputElement).value.trim(),
    company: (document.getElementById('company') as HTMLInputElement).value.trim(),
  };
}

////////////

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginFormElement") as HTMLFormElement;
  const userEmail = document.getElementById("login-useremail") as HTMLInputElement;
  const userPassword = document.getElementById("login-password") as HTMLInputElement;
  const button = document.getElementById("button") as HTMLButtonElement;
  const userEmailError = document.getElementById("UseremailError") as HTMLSpanElement;
  const userPasswordError = document.getElementById("userPasswordError") as HTMLSpanElement;

  // Disable button initially
  button.disabled = true;

  // Enable button only when both fields are filled
  const validateInputs = () => {
    if (userEmail.value.trim() && userPassword.value.trim()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  userEmail.addEventListener("input", validateInputs);
  userPassword.addEventListener("input", validateInputs);

  loginForm.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const emailValue = userEmail.value.trim();
    const passwordValue = userPassword.value.trim();

    // Validate Email Format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com)$/;
    if (!emailPattern.test(emailValue)) {
      userEmailError.textContent = "Please enter a valid email (e.g., example@domain.com)";
      userEmailError.style.color = "red";
      return;
    } else {
      userEmailError.textContent = "";
    }

    // Validate User Credentials
    try {
      const response = await fetch(`${API_URL_USER}?email=${emailValue}`);
      const users: User[] = await response.json();
      console.log(users[0].email, users[0].password);
      if (users.length === 0) {
        userEmailError.textContent = "Email not found";
        userEmailError.style.color = "red";
        return;
      }

      const user = users[0];

      if (user.password !== passwordValue) {
        userPasswordError.textContent = "Incorrect password";
        userPasswordError.style.color = "red";
        return;
      }

      // If login is successful
      alert("Login successful!");
      handleUserRole(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  });
});

// Redirect User Based on Role
function handleUserRole(user: User): void {
  if (user.role === "Admin" || user.role === "Super Admin") {
    // window.location.href = "/Week-3/day-4/public/index.html";
  } else if (user.role === "Customer") {
    // window.location.href = "/Week-3/day-4/public/customer.html";
    localStorage.setItem("username", user.username);
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById('loginFormElement') as HTMLFormElement;
//   const userEmail = document.getElementById("login-email") as HTMLInputElement;
//   const userPassword = document.getElementById("login-password") as HTMLInputElement;
//   const button=document.getElementById("button")as HTMLButtonElement;
//   const UserEmailError=document.getElementById("UsernameError")as HTMLSpanElement;
//   const userPasswordError=document.getElementById("userPasswordError")as HTMLSpanElement;
//   button.disabled=true;

//   const validateInputs=()=>{
//     const email=userEmail.value.trim();
//     const password=userPassword.value.trim();
//     if( email && password){
//       button.disabled=false;
//     }else{
//       button.disabled=true
//     }
//   }
//   loginForm.addEventListener('submit', async (e: Event) => {
//     e.preventDefault();
//     const eamilValue=userEmail.value.trim();
//     const passwordValue=userPassword.value.trim();
//     // button.disabled=true;

//     if (!eamilValue|| !passwordValue) {
//       button.disabled=true;
//       return;
//     }
     
//     const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;
//     if (!emailPattern.test(eamilValue)) {
//       UserEmailError.textContent="Please enter a valid email (e.g., example@domain.com";
//       UserEmailError.style.color='red'
//       return false;
//     }
//   //  button.disabled=false;
//     await fetchDataFrom(userEmail.value.trim(), userPassword.value.trim());
//   });
// });



// function handleUserRole(user: User): void {
//   if (user.role === "Admin" || user.role === "Super Admin") {
//     window.location.href = "/Week-3/day-4/public/index.html";
//   } else if (user.role === "Customer") {
//     window.location.href = "/Week-3/day-4/public/customer.html";
//     localStorage.setItem("username", user.username);
//   }
// }

// async function fetchDataFrom(email: string, password: string): Promise<void> {
//   try {
//     const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
//     const data: User[] = await response.json();
    
//     if (data.length === 0) {
//       alert("User not found");
//       return;
//     }

//     const user = data[0];
//     if (user.password !== password) {
//       alert("Incorrect password");
//       return;
//     }

//     alert("Login successful!");
//     handleUserRole(user);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }

// const employeeForm = document.getElementById("employeeForm") as HTMLFormElement;
// employeeForm.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   // handleFormSubmission();
// });




// function validateFormData(data: FormData): boolean {
//   let isValid = true;

//   if (!data.fname) {
//     document.getElementById("firstError")!.textContent = "First name is required";
//     isValid = false;
//   }
//   if (!data.lname) {
//     document.getElementById("lastError")!.textContent = "Last name is required";
//     isValid = false;
//   }
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailPattern.test(data.email)) {
//     document.getElementById("emailError")!.textContent = "Invalid email format.";
//     isValid = false;
//   }
//   const phonePattern = /^[6-9]\d{9}$/;
//   if (!phonePattern.test(data.phone)) {
//     document.getElementById("phoneError")!.textContent = "Invalid phone number.";
//     isValid = false;
//   }
//   if (!data.password) {
//     document.getElementById("passwordError")!.textContent = "Password is required";
//     isValid = false;
//   }

//   return isValid;
// }

// async function addUser(data: FormData): Promise<void> {
//   try {
//     const response = await fetch(API_URL_USER, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       alert("Failed to add user");
//       return;
//     }

//     alert("User added successfully");
//     employeeForm.reset();
//     ($('#addEmployeeModal') as any).modal('hide');
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong. Please try again.");
//   }
// }

// function handleFormSubmission(): void {
//   const formData = getFormData();
//   clearErrors();

//   if (validateFormData(formData)) {
//     addUser(formData);
//   }
// }

// function clearErrors(): void {
//   const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
//   errorIds.forEach(id => {
//     document.getElementById(id)!.textContent = "";
//   });
// }
