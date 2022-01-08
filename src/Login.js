import React, {useState}from 'react'
import './Login.css'
import {Link , useHistory} from "react-router-dom";
import {auth} from "./firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const[password,setPassword]= useState('');

    const signIn =  e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        //do some fancy firebase login 
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            //it succesfuly created a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))


        //do some fancy firebase register
    }

    return (
        <div className='login'>
            <Link to ='/'>
            <img className="login__logo" 
            src='https://img.favpng.com/4/13/6/e-commerce-shopping-cart-software-amazon-com-online-shopping-png-favpng-4Qtxm85prRnQyqrAppQVmSJaV.jpg'
            alt="" />
            </Link>

            <div className="login__container">
              <h1>Sign-in</h1>

              <form>
                  <h5>E-mail</h5>
                  <input type='text' value={email} 
                  onChange={e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type='password' value={password} 
                  onChange={e => setPassword(e.target.value)} />

                  <button type="submit" onClick={signIn}
                  className="login__signInButton">Sign In</button>
              </form>
              <p>By sigining-in you agree to the conditions of Use & Sale.
                  Please see aur Privacy Notice, our Cookies Notice
                  and our Interest-Based Ads Notice.
              </p>
              <button onClick={register}
              className="login__registerButton">Create your fresh account</button>
            </div>
        </div>
    )
}

export default Login
