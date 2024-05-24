import React, { useState } from 'react';
import { toast } from "react-toastify";
import { registerUserApi } from '../../components/Api';


const RegisterPage = () => {
    //Logic section

    // Make a useState for 5 fields
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // UseState for error messages
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // Make functions for each changing the values

    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastname = (e) => {
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    //validation
    var validate = () => {
        var isValid = true;

        // validate the first name
        if (firstname.trim() === "") {
            setFirstNameError("First name is required");
            isValid = false;
        }

        // validate the last name
        if (lastname.trim() === "") {
            setLastNameError("Last name is required");
            isValid = false;
        }

        // validate the email
        if (email.trim() === "") {
            setEmailError("Email is required");
            isValid = false;
        }

        // validate the password
        if (password.trim() === "") {
            setPasswordError("password is required");
            isValid = false;
        }

        // validate the confirm password
        if (confirmPassword.trim() === "") {
            setConfirmPasswordError("Confirm password is required");
            isValid = false;
        }
        if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError("Password and confirm password doesnot match");
            isValid = false;
        }
        return isValid;
    };
    //Submit button function
    const handleSubmit = (e) => {
        e.preventDefault();

        // validate
        var isValidated = validate();
        if (!isValidated) {
            return;
        }

        // sending request to the api

        //Making json object
        const data = {
            "firstName": firstname,
            "lastName": lastname,
            "email": email,
            "password": password
        }

        registerUserApi(data).then((res) => {

            // Received Data: success, message

            if (res.data.success === false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
            }
        })



    };
    return (
        <>
            <div className="container mt-2">
                <h1>Create an Account!</h1>
                <form className="w-50">
                    <label>Firstname :{firstname} </label>
                    <input
                        onChange={handleFirstname}
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                    />
                    {firstNameError && <p className="text-danger">{firstNameError}</p>}

                    <label className="mt-2">Lastname : {lastname}</label>
                    <input
                        onChange={handleLastname}
                        type="text"
                        className="form-control"
                        placeholder="Enter your last name"
                    />
                    {lastNameError && <p className="text-danger">{lastNameError}</p>}
                    <label className="mt-2">Email : {email}</label>
                    <input
                        onChange={handleEmail}
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                    />
                    {emailError && <p className="text-danger">{emailError}</p>}
                    <label className="mt-2">Password :{password} </label>
                    <input
                        onChange={handlePassword}
                        type="text"
                        className="form-control"
                        placeholder="Enter your password"
                    />
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                    <label className="mt-2">Confirm Password:{confirmPassword} </label>
                    <input
                        onChange={handleConfirmPassword}
                        type="text"
                        className="form-control"
                        placeholder="Enter your confirm password"
                    />
                    {confirmPasswordError && (
                        <p className="text-danger">{confirmPasswordError}</p>
                    )}
                    <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
                        Create an account
                    </button>
                </form>
            </div>
        </>
    );
};
export default RegisterPage;

//step 1 : make a Complete ui of page (Fields,buttons etc)done
// step 2:input (type):make a state done
// step 3:On change - set the value to the state done
// step 4 : validate in frontend 