import { Helmet } from "react-helmet-async";
import img from '../../assets/others/authentication2.png';
import './Login.css';
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

     useEffect(()=>{
      loadCaptchaEnginge(5); 
     }, []);


    const handleLogin = event =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);




        // form.email.value = '';
        // form.password.value = '';
        // captchaRef.current.value = '';
                  
         
          
    };
       
    

     const handleValidateCaptcha = () => {
        const user_captcha_value =  captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)){
                  setDisabled(false);
        }
        else{
           setDisabled(true);
        }
        
       
     };

    return (
        <div>
           <Helmet>
            <title>Restaurant | Login </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-300 ">
  <div className="hero-content login-container flex">
    <div className="">
    <img src={img}  alt="" />
    </div>
  
    <div className="card w-full max-w-sm shadow-2xl bg-base-300">
    <h1 className="text-3xl font-bold text-center mt-1">Login now</h1>
      <form onSubmit={handleLogin} className="card-body">
      
        <div  className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
        </div>



        <div className="form-control mt-3">
          <input disabled={disabled}  className="btn btn-primary" type="submit" value="Login" />
        </div>
        <p className="text-center uppercase hover:underline"><small>New Here? <Link to={"/signup"}>Create an account</Link></small></p>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;