"use strict";
// const API_URL:string= "http://localhost:3000";
// const API_URL_USER:string = `${API_URL}/users`;
// document.addEventListener("DOMContentLoaded",function () {
//   const Login_Form = document.getElementById('loginFormElement') as HTMLElement ;
//   let UserEmail = document.getElementById("login-username")  as HTMLInputElement;
//   let UserPassword = document.getElementById("login-password") as HTMLInputElement;
//   Login_Form.addEventListener('submit',async function (e) {
//     e.preventDefault(); // Prevent form from refreshing
//     //check for empty fields
//     console.log(UserEmail.value)
//   if (UserEmail.value.trim()=== "" || UserPassword.value.trim()=== "") {
//       alert("Please fill in both fields");
//       return;
//     }
//     //Email Validations 
//     const emailPatr = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;
//    if (!emailPatr.test(UserEmail.value.trim())) {
//      alert("Please enter a valid email (e.g., example@domain.com)");
//      return;
// }
//     // Fetch user data
//    await FetchDataFrom(UserEmail.value.trim(), UserPassword.value.trim());
//   })
// });
// type User={
//     user:string,
//     role:string
// }
// function handleUserRole(user:User) {
//   if (user.role === "Admin" || user.role === "Super Admin") {
//     // alert("Login successful! Redirecting to Admin dashboard...");
//     // window.location.replace("/Week-3/day-4/public/index.html");
//     window.location.href="/Week-3/day-4/public/index.html"
//    } else if (user.role === "Customer") {
//     window.location.href = "/Week-3/day-4/public/customer.html";
//     localStorage.setItem("username", user.username); // Store username in local storage
//   }
// }
// //Fetch user data from API and Check password
// async function FetchDataFrom(email:string,password:string) {
//   try {
//     const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
//     const data = await response.json();
//     if (data.length === 0) {
//       alert("User not found");
//       return;
//     }
//     const user=data[0]
//     if(user.password!==password){
//       alert("incorect password")
//       return ;
//     }
//      // Show success alert and handle redirection
//      alert("Login successful!");
//     handleUserRole(user);
//   } catch (error) {
//     console.error("Error fetching user data:")
//   }
// }
// //////modal data
// //store the data 
// const employeeForm=document.getElementById("employeeForm") as HTMLFormElement;
// employeeForm.addEventListener('submit',function(e){
//   e.preventDefault()
//   handleFormSubmission();
// });
// //collect from daat
// type values={
//     fname:string,
//     lname:string,
//     email:string,
//     address:string,
//     password:string,
//     role:string,
//     website:string,
//     phone:string,
//     company:string
// }
// function getFormData():values{
//   return{
//     fname:document.getElementById('fname').value.trim(),
//     lname: document.getElementById('lname').value.trim(),
//     email: document.getElementById('email').value.trim(),
//     address: document.getElementById('address').value.trim(),
//     password: document.getElementById('password').value.trim(),
//     role: document.getElementById('role').value,
//     phone: document.getElementById('phone').value.trim(),
//     website: document.getElementById('website').value.trim(),
//     company: document.getElementById('company').value.trim(),
//   };
// }
// ///////Validate the form data
// function ValidateFormData(data) {
//   let isValid=true;
//   if (data.fnam=="" ){
//     document.getElementById("firstError").textContent="First  name are required"
//     isValid=false;
//   }
//   if (data.lname==""){
//     document.getElementById("lastError").textContent=" Last name are required"
//     isValid=false;
//   }
//   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!pattern.test(data.email)) {
//     document.getElementById("emailError").textContent = "Invalid email format.";
//     isValid = false;
// }
//   const phonePattern = /^[6-9]\d{10}$/;
//   if(phonePattern.test(data.phone)){
//     document.getElementById("phoneError").textContent="Invalid Phone Number.";
//     isValid=false;     
//   }
//   if(data.password==""){
//     document.getElementById("passwordError").textContent="Password must be required"
//     isValid=false
//   }
//   return isValid;
//   }
// ///post data to JSON Server
// async function addUser(data) {
//   try{
//     const response=await fetch(API_URL_USER,{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(data),
//     });
//     if(!response.ok){
//       alert("failed to add user")
//     }
//     alert("user added successfully");
//     employeeForm.reset()////clear the form
//     $('#addEmployeeModal').modal('hide') //close the modal
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/users`;


document.addEventListener("DOMContentLoaded",function () {
  const Login_Form = document.getElementById('loginFormElement')  ;
  let UserEmail = document.getElementById("login-username")   ;
  let UserPassword = document.getElementById("login-password") ;
  const name_error=document.getElementById("name_error");
  const password_error=document.getElementById("password_error");

  Login_Form.addEventListener('submit',async function (e) {
    e.preventDefault(); // Prevent form from refreshing
    const btn=document.getElementById("button")
    // Reset error messages and styles
  
    name_error.innerHTML = "";
    password_error.innerHTML = "";
    UserEmail.style.borderColor = '';
    UserEmail.style.boxShadow = '';
    UserPassword.style.borderColor = '';
    UserPassword.style.boxShadow = '';
    const emailPatr = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;

    //check for empty fields
    if(UserEmail.value===''|| UserPassword.value===""){
      btn.disabled=true;
      return ;
    }
    // if(UserEmail.value.trim()===null|| UserEmail.value.trim()===null){
    //   e.preventDefault();
    //   name_error.innerHTML="User email is required ."
    //   password_error.innerHTML="User password is required";
    //   UserEmail.style.borderColor='red';
    //   UserEmail.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.8)';
    //   UserPassword.style.borderColor='red';
    //   UserPassword.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.8)';
    //   btn.disabled=true;
    //   return ;
    // }
    else if( !emailPatr.test(UserEmail.value)){
      name_error.innerHTML="Please  enter a valid email (e.g., example@domain.com)";
      UserEmail.style.borderColor='red';
      UserEmail.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.8)';
      btn.disabled=true
      return  ;
    }
    else if(UserPassword.value!==password.value){
      password_error.innerHTML="Enter valid password!.";
      UserPassword.style.borderColor='red';
      UserPassword.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.8)';
      btn.disabled=true;
      return;
    }
    //  if(UserEmail.value===email && UserPassword.value==""){
    //     UserEmail.style.borderColor='green'
    //     UserEmail.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.8)';
    //     password_error.innerHTML="Eneter ur password";
    //     UserPassword.style.borderColor="red";
    //     UserPassword.style.boxShadow='0 0 8px rgba(255, 0, 0, 0.8)';
    //     btn.disabled=true;
    // }
    else{
      Swal.fire({
        title: "Login successful!",
        text: `Welcome ${user.role==='admin' ? "Admin":"User"}`,
        icon: "success"
      });
    }

    //  If all validations pass--add gree  borders
    UserEmail.style.borderColor='green'
    UserEmail.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.8)';
    UserPassword.style.borderColor='green';
    UserPassword.style.boxShadow='0 0 8px rgba(0, 255, 0, 0.8)';
    btn.disabled=false;
    // Fetch user data
   await FetchDataFrom(UserEmail.value.trim(), UserPassword.value.trim());
  })
   
  

});

//Fetch user data from API and Check password
async function FetchDataFrom(email,password) {
  try {
    const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
    const data = await response.json();
    
    if (data.length === 0) {
      //Show sweetalter 
      Swal.fire({
        title: "user mail and password is not Enter!",
        text: `Welcome ${user.role==='admin' ? "Admin":"User"}`,
        icon: "success"
      });
      return;
    }
    const user=data[0]
    if(user.password!==password){
      //Show sweetalter 
      Swal.fire({
        title: "password is not correct!",
        text: `Welcome ${user.role==='admin' ? "Admin":"User"}`,
        icon: "success"
      });
      return ;
    }
     // Show success alert and handle redirection
     //Show sweetalter 
     else{
      Swal.fire({
        title: "Login successful!",
        text: `Welcome ${user.role==='admin' ? "Admin":"User"}`,
        icon: "success"
      });
     }
     alter("sucessfully")
    handleUserRole(user);
  } catch (error) {
    console.error("Error fetching user data:")
  }
}

function handleUserRole(user) {
  if (user.role === "Admin" || user.role === "Super Admin") {
    window.location.href="/Week-3/day-4/public/index.html"
   } else if (user.role === "Customer") {
    window.location.href = "/Week-3/day-4/public/customer.html";
    localStorage.setItem("username", user.username); // Store username in local storage
  }
}



//////modal data
//store the data 
const employeeForm=document.getElementById("employeeForm")
employeeForm.addEventListener('submit',function(e){
  e.preventDefault()
  handleFormSubmission();
});

//collect from daat
function getFormData(){
  return{
    fnam:document.getElementById('fname').value.trim(),
    lname: document.getElementById('lname').value.trim(),
    email: document.getElementById('email').value.trim(),
    address: document.getElementById('address').value.trim(),
    password: document.getElementById('password').value.trim(),
    role: document.getElementById('role').value,
    phone: document.getElementById('phone').value.trim(),
    website: document.getElementById('website').value.trim(),
    company: document.getElementById('company').value.trim(),
  };
}
///////Validate the form data
function ValidateFormData(data) {
  let isValid=true;
  if (data.fnam=="" ){
    document.getElementById("firstError").textContent="First  name are required"
    isValid=false;
     
  }
  if (data.lname==""){
    document.getElementById("lastError").textContent=" Last name are required"
    isValid=false;
     
  }
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(data.email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
}

  const phonePattern = /^[6-9]\d{10}$/;
  if(phonePattern.test(data.phone)){
    document.getElementById("phoneError").textContent="Invalid Phone Number.";
    isValid=false;     
  }
  if(data.password==""){
    document.getElementById("passwordError").textContent="Password must be required"
    isValid=false
  }
  
  return isValid;
  
  }

///post data to JSON Server
async function addUser(data) {
  try{
    const response=await fetch(API_URL_USER,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
    });
    if(!response.ok){ 
      alert("failed to add user")
    }
    alert("user added successfully");
    employeeForm.reset()////clear the form
    $('#addEmployeeModal').modal('hide') //close the modal
  }catch(err){
    console.log(err)
    alter("Smoething went wrong . please try again.")
  }
  
}

////Handle form submisssion
function handleFormSubmission(){
  const formData=getFormData();

  //clear priviou error messeage
  clearErrors();

  if (ValidateFormData(formData)){
          addUser(formData)
  }
}

//clear error meassgae
function clearErrors( ) {
  const errorId=['firstError',"lastError",'emailError','phoneError','passwordError']
  errorId.forEach(id=>{
    document.getElementById(id).textContent="";
  });
}
