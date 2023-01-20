import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import "./Login.css"
import signinImg from "./../../images/login-page-pic.png"
import profilePic from "./../../images/profile-pic.png"
import { currentUser } from '../../util/currentUser'



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (currentUser) {
            window.location.href = "/"
        }
    }, [])

    async function signinUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,

        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "success 🎉",
                text: response.data.message,
                icon: "success",
                button: "yhaa hoo!"
            })
            localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            window.location.href = "/"

        }
        else {
            await swal({
                title: "Error 😣",
                text: response.data.message,
                icon: "error",
                button: "Try Again!"
            })
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser')
        }
    }
    return (
        <div>
           

            <div className='row'>
                <div class='col-md-6 col border'>
                    <h1 className='text-center mt-3 signup-heading'>Login</h1>
                    <form>
                        <div className='first-login-container '>
                            <div className='profile-pic-container'>
                                <img src={profilePic} className='profile-pic' alt='' />
                            </div>

                            <div className='login-form-item'>
                                <label htmlFor='email'>Email </label> {<br></br>}
                                <input type="email" id='suremailname' className='login-form-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className='login-form-item'>
                                <label htmlFor='password'>Password </label> {<br></br>}
                                <input type="password" id='password' className='login-form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className='btn-box'>
                                <button type='button' className='signin-btn' onClick={signinUser}> Sign In</button>
                            </div>

                            <p className='para-login'>Create account</p>
                        </div>
                    </form>

                </div>

                <div class='col-md-6 border'>
                    <div className='login-right-container'>
                        <img src={signinImg} alt='' className="login-right-image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login