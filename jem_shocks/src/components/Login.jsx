import React, { Component } from 'react';
import './styles/Login.css';

export class Login extends Component {
    render() {
        return (
            <div>
                <div class="login-card">
                    <h2>Login</h2>
                    <h3>Enter your credentials</h3>
                    <form class="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <a href="google.com">Don't have an account, <span class="signUp">SIGN UP</span> for free</a>
                        <a href="https://google.com">Forgot your password?</a>
                        <button class="btn">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;