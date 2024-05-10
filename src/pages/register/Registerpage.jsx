import React, { useState } from 'react';

const RegisterPage = () => {
    //Logic Section

    // make a useState for 5 fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Use State for error Message
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmpasswordError, setConfirmPasswordError] = useState('')

    // make a each function for changing the value

    const handleFirstName = (e) => {
        setFirstName(e.target.value);

    }
    const handleLastName = (e) => {
        setLastName(e.target.value);

    }
    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);

    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

    }
    //validation
    var validate = () => {
        var isValid = true;

        //validate the first name 
        if (firstName.trim() === '') {
            setFirstNameError("First name is Required!")
            isValid = false;
        }
        if (lastName.trim() === '') {
            setLastNameError("Last name is Required!")
            isValid = false;
        }
        if (email.trim() === '') {
            setEmailError("Email is Required!")
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError("Password name is Required!")
            isValid = false;
        }
        if (confirmPassword.trim() === '') {
            setConfirmPasswordError("Confirm Password name is Required!")
            isValid = false;
        }
        if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError("Password and confirm password dosenot match")
            isValid = false;
        }
        return isValid;

    }

    //submit button function
    const handleSubmit = (e) => {
        e.preventDefault()

        //validate

        var isValidated = validate();
        if (!isValidated) {
            return
        }

        console.log(firstName, lastName, email, password, confirmPassword)
    }

    return (
        <><div className='container mt-2'>
            <h1>Create an account</h1>

            <form className='w-50'>
                <label > First Name :{firstName}</label>
                <input onChange={handleFirstName} type="text" className='form-control' placeholder="Enter your first Name" />
                {
                    firstNameError && <p className='text-danger'>{firstNameError}</p>
                }
                <label className="mt-2 "> Last Name:{lastName}</label>
                <input onChange={handleLastName} type="text" className='form-control' placeholder="Enter your last Name" />
                {
                    lastNameError && <p className='text-danger'>{lastNameError}</p>
                }
                <label className="mt-2"> Email:{email}</label>
                <input onChange={handleEmail} type="text" className='form-control' placeholder="Enter your Email" />
                {
                    emailError && <p className='text-danger'>{emailError}</p>
                }
                <label className="mt-2"> Password:{password}</label>
                <input onChange={handlePassword} type="text" className='form-control' placeholder="Enter your Password" />
                {
                    passwordError && <p className='text-danger'>{passwordError}</p>
                }
                <label className="mt-2"> Confirm Password:{confirmPassword}</label>
                <input onChange={handleConfirmPassword} type="text" className='form-control' placeholder="Enter your Confirm Password" />
                {
                    confirmpasswordError && <p className='text-danger'>{confirmpasswordError}</p>
                }
                <button onClick={handleSubmit} className='btn btn-dark mt-3 w-100'>Create an account</button>

            </form>
        </div>


        </>
    )
}
export default RegisterPage;

//step 1 : make a Complete ui of page (Fields,buttons etc)done
// step 2:input (type):make a state done
// step 3:On change - set the value to the state done
// step 4 : validate in frontend 