import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login/dist/facebook-login-render-props';
import { Redirect } from 'react-router-dom';

import FacebookLogo from '../../assets/font-awesome-icons/facebook-brands-2.svg'

import './styles.css';

export default class LoginFacebook extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            social: ''
        }
        this.responseFacebook = this.responseFacebook.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }
    componentWillMount(){
        if (localStorage.getItem("fbData")){
            this.setState({ isLogged: true });
        }
    }
    responseFacebook = response => {
        console.log(response)
        localStorage.setItem("fbData", JSON.stringify({
            token: response.accessToken,
            email: response.email,
            name: response.name,
            picture: response.picture.data.url,
            social: 'fb'
        }))
        this.setState({ isLogged: true})
    }
    onFailure(error){
        console.log(error)
    }

    render() {
        let fbContent;
        if (this.state.isLogged){
            return(<Redirect to="/inicio"/>)
        } else {
            fbContent = (<FacebookLoginBtn
                appId="2540565909590271"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                render={renderProps => (
                    <button className="btn-fb" onClick={renderProps.onClick}><img id="fb-logo" src={FacebookLogo} alt="Facebook"/>Entrar com</button>
                )} 
            />)
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
