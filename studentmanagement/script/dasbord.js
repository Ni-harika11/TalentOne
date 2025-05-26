class Dasbord{
    constructor(){
        //Bond modal and from elements
        this.model=document.getElementById('addEmployeeModal');
        this.form = document.getElementById('employeeForm');
        this.fields={
            fname: document.getElementById('fname'),
            lname: document.getElementById('lname'),
            email: document.getElementById('email'),
            phone: document.getElementById('phone'),
            address: document.getElementById('address'),
            website: document.getElementById('website'),
            company: document.getElementById('company')
        };
        this.errorMessages={
            name: document.getElementById('nameError'),
            email: document.getElementById('emailError'),
            phone: document.getElementById('phoneError'),
            address: document.getElementById('addressError'),
            website: document.getElementById('websiteError'),
            company: document.getElementById('companyError')
        };
        //Add form submit event listener
        this.form.addEventListener('submit',(e)=>this.handleFormSubmit(e));
        //Initialize modal close button
        document.querySelector('.close').addEventListener('click',()=>this.closeModal());
    }
    //open the modal
    openModal(){
        this.model.classList.remove('hidden');
    }
    //clear error messages
    clearErrors(){
        Object.values(this.errorMessages).forEach(error => error.textContent = '');
    }
}