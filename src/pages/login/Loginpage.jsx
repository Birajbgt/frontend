import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../components/Api";

const Login = () => {
  //make a usestate for each input
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // make a error state
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validate = () => {
    let isValid = true;
    //validating the first name
    if (email.trim() === '' || !email.includes('@')) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('password is required');
      isValid = false;
    }
    return isValid;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    //make a json object

    const data = {
      "email": email,
      "password": password
    }
    loginUserApi(data).then((res) => {
      //recived data: success message
      if (res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
        // success-boolen, message-text ,token-text ,
        //Setting  token and user data in local storage
        localStorage.setItem('token', res.data.token)

        // setting user data
        const convertedData = JSON.stringify(res.data.userData);


        // local storage set
        localStorage.setItem('user', convertedData);


      }

    })

  }
  return (
    <>
      <div className="container mt-2">
        <h1>Login Page</h1>
        <form className="  w-50">

          <label className="mt-2">email :{email}</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="enter your email" />
          {emailError && <p className="text-danger">{emailError}</p>}

          <label className="mt-2">Password :{password}</label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" placeholder="enter your password" />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <button onClick={handleSubmit} className="btn btn-dark mt-3 w-100">Login</button>
        </form>

      </div>

    </>
  )
}

export default Login;