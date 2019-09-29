import React from 'react';

import './SignIn.styles.scss';

import FormInput from '../form-input/FormInput';

import CustomButton from '../customButton/CustomButton';

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
        console.log(e.target)

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
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
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        ) 
    }
};

export default SignIn;