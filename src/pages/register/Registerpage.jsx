import React, { useState } from 'react';

const RegisterPage = () => {
    //Logic Section

    // make a useState for 5 fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <><div className='container mt-2'>
            <h1>Create an account</h1>

            <form className='w-50'>
                <label > First Name</label>
                <input type="text" className='form-control' placeholder="Enter your first Name" />
                <label className="mt-2 "> Last Name</label>
                <input type="text" className='form-control' placeholder="Enter your last Name" />
                <label className="mt-2"> Email</label>
                <input type="text" className='form-control' placeholder="Enter your Email" />
                <label className="mt-2"> Password</label>
                <input type="text" className='form-control' placeholder="Enter your Password" />
                <label className="mt-2"> Confirm Password</label>
                <input type="text" className='form-control' placeholder="Enter your Confirm Password" />
                <button className='btn btn-dark mt-3 w-100'>Create an account</button>

            </form>
        </div>


        </>
    )
}
export default RegisterPage;

//step 1 : make a Complete ui of page (Fields,buttons etc)done
// step 2:input (type):make a state done 
// step 3:On change - set the value to the state