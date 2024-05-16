import { Helmet } from "react-helmet-async";
import img from '../../assets/others/authentication2.png';
import { Link } from "react-router-dom";

const Signup = () => {


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
            <title>Restaurant | Sign up </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-300 ">
  <div className="hero-content login-container flex  flex-row-reverse">
    <div className="">
    <img src={img}  alt="" />
    </div>
  
    <div className="card w-full max-w-sm shadow-2xl bg-base-300">
    <h1 className="text-3xl font-bold text-center mt-3">Sign up</h1>
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
        </div>
        <div className="form-control mt-3">
          <input  className="btn btn-primary" type="submit" value="Sign up " />
        </div>
        <p className="text-center uppercase hover:underline"><small><Link to={"/login"}>Login Now!</Link></small></p>
        
      </form>
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Signup;