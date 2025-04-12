<<<<<<< HEAD
=======


>>>>>>> week-5
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/users`;


<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",function () {
  const Login_Form = document.getElementById('loginFormElement')  ;
  let UserEmail = document.getElementById("login-username")   ;
  let UserPassword = document.getElementById("login-password") ;

  Login_Form.addEventListener('submit',async function (e) {
    e.preventDefault(); // Prevent form from refreshing
    const btn=document.getElementById("button")
    //check for empty fields
    // console.log(UserEmail.value)
  if (UserEmail.value.trim()=== "" || UserPassword.value.trim()=== "") {
      // alert("Please fill in both fields");
      btn.disabled=true;
      return;
      
    }else{
      btn.disabled=false;
=======

document.addEventListener("DOMContentLoaded",function () {
  const Login_Form = document.getElementById('loginFormElement');
  let UserEmail = document.getElementById("login-username");
  let UserPassword = document.getElementById("login-password");

  Login_Form.addEventListener('submit',async function (e) {
    e.preventDefault(); // Prevent form from refreshing
    //check for empty fields
    console.log(UserEmail.value)
  if (UserEmail.value.trim()=== "" || UserPassword.value.trim()=== "") {
      alert("Please fill in both fields");
      return;
>>>>>>> week-5
    }
    //Email Validations 
    const emailPatr = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;

   if (!emailPatr.test(UserEmail.value.trim())) {
     alert("Please enter a valid email (e.g., example@domain.com)");
     return;
<<<<<<< HEAD
}    
=======
}


    
>>>>>>> week-5
    // Fetch user data
   await FetchDataFrom(UserEmail.value.trim(), UserPassword.value.trim());
  })
});

function handleUserRole(user) {
  if (user.role === "Admin" || user.role === "Super Admin") {
    // alert("Login successful! Redirecting to Admin dashboard...");
    // window.location.replace("/Week-3/day-4/public/index.html");
    window.location.href="/Week-3/day-4/public/index.html"
   } else if (user.role === "Customer") {
    window.location.href = "/Week-3/day-4/public/customer.html";
    localStorage.setItem("username", user.username); // Store username in local storage
  }
}

//Fetch user data from API and Check password
async function FetchDataFrom(email,password) {
  try {
    const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
    const data = await response.json();
    
    if (data.length === 0) {
      alert("User not found");
      return;
    }
    const user=data[0]
    if(user.password!==password){
      alert("incorect password")
      return ;
    }
     // Show success alert and handle redirection
     alert("Login successful!");
    handleUserRole(user);
  } catch (error) {
    console.error("Error fetching user data:")
  }
}


<<<<<<< HEAD
//////modal data 
=======
//////modal data
>>>>>>> week-5
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
<<<<<<< HEAD
    document.getElementById(id).textContent="";
  });
}
=======
    document.getElementById(id).textContent=""
  });
  }
>>>>>>> week-5
