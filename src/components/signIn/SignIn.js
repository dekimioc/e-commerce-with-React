import React from 'react';

import './SignIn.styles.scss';

import FormInput from '../form-input/FormInput';

import CustomButton from '../customButton/CustomButton';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        await auth.signInWithEmailAndPassword(email, password);

        try{
            this.setState({
                email: "",
                password: ""
            })
        } catch(error) {
            console.error(error)
        }
     
    }

    render() {
        return(
            <div className="sign-in"> 
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                    />
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        label="password"    
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={() => SignInWithGoogle()}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        ) 
    }
};

export default SignIn;