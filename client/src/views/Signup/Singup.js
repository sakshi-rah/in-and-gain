import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import "./Signup.css"
import profilePic from "./../../images/profile-pic.png"
import { currentUser } from '../../util/currentUser'


function Singup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")

    useEffect(() => {
        if (currentUser) {
            window.location.href = "/"
        }
    }, [])

    async function signupUser() {
        const response = await axios.post('/signup', {
            name: name,
            email: email,
            password: password,
            phone: phone,
            role: role
        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "success 🎉",
                text: response.data.message,
                icon: "success",
                button: "yhaa hoo!"
            })
            window.location.href = "/Login"
        }
        else {
            swal({
                title: "Error 😣",
                text: response.data.message,
                icon: "error",
                button: "Try Again!"
            })
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
        }
    }
    return (
        <div className='main-signup-container'>

            <div className='row'>

                <div className='col-md-12 col-12 col-lg-8'>

                    <form>
                        <div className='signup-first-container'>
                            <h1 className='text-center  signup-heading'>Create Account</h1>
                            <div className='profile-pic-container'>
                                <img src={profilePic} className='profile-pic' alt='' />
                            </div>
                            <div className='sig'>
                                <div className='signup-form-item'>
                                    <label htmlFor='name' className=''>Full Name  </label>
                                    <input type="text" id='name' className='signup-form-input' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>


                                <div className='signup-form-item'>
                                    <label htmlFor='email'>Email </label>
                                    <input type="email" id='suremailname' className='signup-form-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className='signup-form-item'>
                                    <label htmlFor='password'>Password </label>
                                    <input type="password" id='password' className='signup-form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className='signup-form-item'>
                                    <label htmlFor='phone'>Phone No. </label>
                                    <input type="text" id='phone' className='signup-form-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className='btn-box'>
                                    <button type='button' className='create-btn' onClick={signupUser}> Create</button>
                                </div>
                                <p className='para-signup'>Have already an account? <b>Login here</b></p>
                            </div>

                        </div>
                    </form>

                </div>
            </div>



        </div>

    )
}

export default Singup