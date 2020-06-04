import React from 'react'
import FormInputs from '../form-input/form-input.component';
import './sign-in.styles.scss'
import Custombotton from '../custom-bottom/custom-botton.component';

import {signInWithGoogle , auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''

        }
    }

    handleOnSubmit = async (event)=>{

        event.preventDefault();

        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:"",
                password:""
            })
        }catch(e){
            console.log(e)
        }

        this.setState({email:'',password:''})

    }

    handleChange = (event)=> {
        const { value, name } = event.target;
        console.log(event.target)
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign In with email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInputs name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInputs name="password" label="Password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="button">

                    <Custombotton type="submit" >submit</Custombotton>
                    <Custombotton type="submit" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</Custombotton>
                    
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;