import React from 'react'
import "./Signup.css"
import signupImg from "./../../Images/signup-page-pic.png"

function Singup() {
    return (
        <div>
            <h1 className='text-center'>create Account</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-container '>
                        <form>
                            <div className='first-container'>

                                <div className='form-item'>
                                    <label htmlFor='name' className=''>First Name  </label>  {<br></br>}
                                    <input type="text" id='name' className='form-input' />
                                </div>

                                <div className='form-item'>
                                    <label htmlFor='surname'>Last Name  </label>{<br></br>}
                                    <input type="text" id='surname' className='form-input' />
                                </div>

                                <div className='form-item'>
                                    <label htmlFor='email'>Email  </label>{<br></br>}
                                    <input type="email" id='email' className='form-input' />
                                </div>

                                <div className='form-item'>
                                    <label htmlFor='password'>Password </label>{<br></br>}
                                    <input type="password" id='password' className='form-input' />
                                </div>

                                <div className='btn-box'>
                                <button type='submit' className='create-btn'> Create</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='right-container'>
                        <img src={signupImg} className="right-image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Singup