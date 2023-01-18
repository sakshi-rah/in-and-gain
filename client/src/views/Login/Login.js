import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import "./Login.css"
import signinImg from "./../../Images/login-page-pic.png"
import profilePic from "./../../Images/profile-pic.png"
import { currentUser } from '../../Util/currentUser'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if(currentUser){
            window.location.href="/"
        }
    },[])

    async function signinUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,

        })
        console.log(response.data)
        if(response.data.success){
            alert( response.data.message)
            localStorage.setItem('currentUser',JSON.stringify(response.data.data))
            window.location.href="/"

        }
        else{
            alert('Error:'+ response.data.message)
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser')
        }
    }
    return (
        <div>
            <h1 className='text-center mt-3 signup-heading'>Login</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='login-form-container '>
                        <form>
                            <div className='first-login-container'>
                                <div className='profile-pic-container'>
                                    <img src={profilePic} className='profile-pic' />
                                </div>

                                <div className='login-form-item'>
                                    <label htmlFor='email'>Email </label> {<br></br>}
                                    <input type="email" id='suremailname' className='login-form-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className='login-form-item'>
                                    <label htmlFor='password'>Password </label>
                                    <input type="password" id='password' className='login-form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className='btn-box'>
                                    <button type='button' className='signin-btn' onClick={signinUser}> Sign In</button>
                                </div>

                                <p className='para-login'>Create account</p>
                            </div>
                        </form>

                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='login-right-container'>
                        <img src={signinImg} className="login-right-image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login