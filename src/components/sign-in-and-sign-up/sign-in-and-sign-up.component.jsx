import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../sign-in/sign-in.components'
import SignUp from '../sign-up/sign-up.component';

const SignInAndSignUp = ()=> (
    <div className="sign-in-and-sign-up" >
        sign in
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;