import { Helmet } from "react-helmet-async";
import img from '../../assets/others/authentication2.png';
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = event =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          form.email.value = '';
          form.password.value = '';
    };
    return (
        <div>
           <Helmet>
            <title>Restaurant | Login </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-300 ">
  <div className="hero-content flex">
    <div className="">
    <img src={img} alt="" />
    </div>
  
    <div className="card  w-full max-w-sm shadow-2xl bg-base-300">
    <h1 className="text-4xl font-bold text-center mt-6">Login now</h1>
      <form onSubmit={handleLogin} className="card-body">
      
        <div className="form-control">
        
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
          <label className="label">
            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;