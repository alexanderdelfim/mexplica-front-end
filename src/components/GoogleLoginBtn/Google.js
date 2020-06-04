import React, { Component } from 'react';
import GoogleLoginBtn from 'react-google-login';
import { Redirect } from 'react-router-dom';


export default class LoginGoogle extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            social: ''
        }
        this.responseGoogle = this.responseGoogle.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }
    componentWillMount(){
        if (localStorage.getItem("googleData")){
            this.setState({ isLogged: true });
        }
    }
    responseGoogle = response => {
        localStorage.setItem("googleData", JSON.stringify({
            token: response.token,
            email: response.profileObj.email,
            name: response.profileObj.name,
            picture: response.profileObj.imageUrl,
            social: 'google'
        }))
        this.setState({ isLogged: true})
    }
    onFailure(error){
        console.log(error)
    }

    render() {
        let googleContent;
        if (this.state.isLogged){
            return(<Redirect to="/inicio"/>)
        } else {
            googleContent = (<GoogleLoginBtn
                clientId="685537399132-oqei58rbrr3ceqegbls701b37fqpomvl.apps.googleusercontent.com"
                autoLoad={ false }
                onSuccess={ this.responseGoogle }
                onFailure={ this.onFailure }
                cookiePolicy={'single_host_origin'}
                >
                <span>Entrar com</span>
            </GoogleLoginBtn>)
        }

        return (
            <div>
                {googleContent}
            </div>
        )
    }
}
