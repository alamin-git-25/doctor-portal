import { useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init.js/Firebase.init';
import Loding from '../Sheared/Loding';
import useToken from '../../Hooks/UserToken';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [updatePassword, updating] = useUpdatePassword(auth);
      
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log();
    const onSubmit = (data) => {
        console.log(data.email,data.password);
       
        signInWithEmailAndPassword(data.email,data.password);
        
    };
    const resetPass = async()=>{
        await  updatePassword(register.password);
        console.log('email send');
    }
    
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const handleGoogle =()=>{
        signInWithGoogle()
    }
    const [token] = useToken(user || Guser);
    if(token){
        navigate(from, {replace: true});
    }
    let siningError;
    if( loading || Gloading || updating){
         return <Loding></Loding>
    }
    if(error || Gerror){
        siningError=<p>Invaliv Email/Password</p>
    }


    return (
        <div className='flex justify-center items-center mt-[120px]'>
            <div className="card bg-base-100 w-[385px] h-[100%] shadow-xl">
                <div className="card-body w-[100%] h-full">
                    <h2 className=" text-3xl text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email"
                           
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password"
                            
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or Longer'
                                    }
                                })}
                            />
                            <label className="label">
                           
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            {siningError}
                        </label>
                        <input className="btn btn-primary  bg-gradient-to-r from-primary to-secondary uppercase mt-5 mb-3 text-white   font-bold w-full max-w-xs" type="submit" value='LOGIN'   />
                        <small><p>Don't Have an Account ?<Link to='/singup'>Sing Up</Link></p></small><small><Link className='text-indigo-500' onClick={resetPass}>Forget Password ?</Link></small>
                    
                    </form>
                    
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className="btn btn-outline btn-secondary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;