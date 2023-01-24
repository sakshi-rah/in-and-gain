import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import "./Signup.css"
import signupImg from "./../../images/signup-page-pic.png"
import profilePic from "./../../images/profile-pic.png"
import { currentUser } from '../../util/currentUser'
import { Link } from 'react-router-dom'
import Navbar from "./../../components/Navbar/Navbar"

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
        <div>
            <Navbar />
            <div className='row'>

                <div className='col-md-6'>

                    <form>
                        <div className='signup-first-container'>
                            <h1 className='text-center'>Create Account</h1>
                            <div className='profile-pic-container'>
                                <img src={profilePic} className='profile-pic' alt='' />
                            </div>
                            <div className='signup-form-item'>
                                <label htmlFor='name' className=''>Full Name  </label> {<br></br>}
                                <input type="text" id='name' className='signup-form-input' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>


                            <div className='signup-form-item'>
                                <label htmlFor='email'>Email </label> {<br></br>}
                                <input type="email" id='suremailname' className='signup-form-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className='signup-form-item'>
                                <label htmlFor='password'>Password </label>{<br></br>}
                                <input type="password" id='password' className='signup-form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className='signup-form-item'>
                                <label htmlFor='phone'>Phone No. </label>{<br></br>}
                                <input type="text" id='phone' className='signup-form-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div className='btn-box'>
                                <button type='button' className='create-btn btn btn-danger' onClick={signupUser}> Create</button>
                            </div>
                            <p className='para-signup '>
                                Have already an account?  <Link to="/login"><b>Login here</b>
                                </Link></p>
                        </div>
                    </form>
                </div>

                <div className='col-md-6'>
                    <img src={signupImg} alt='' className="signup-right-image" />
                </div>
            </div>



        </div>

    )
}

export default Singup