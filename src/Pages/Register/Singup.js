import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init.js/Firebase.init';
import Loding from '../Sheared/Loding';
import useToken from '../../Hooks/UserToken';

const Singup = () => {
    const navigate = useNavigate();
        const { register, handleSubmit, formState: { errors } } = useForm();
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);
        const onSubmit =async (data) => {
           await createUserWithEmailAndPassword(data.email,data.password)
            await updateProfile({ displayName:data.name});
            console.log('upda');
            
        };
        const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
        const [token] = useToken(user || Guser);

        if(token){
            navigate('/appointment');
        }

        const handleGoogle =()=>{
            signInWithGoogle()
        }
        
        const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
if(loading || Gloading || updating){
    return <Loding/>
}
        return (
            <div className='flex justify-center items-center mt-[120px]'>
            <div className="card bg-base-100 w-[385px] h-[100%] shadow-xl">
                <div className="card-body w-[100%] h-full">
                    <h2 className="card-title">Sing Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text"
                           
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                    
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </label>
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
                            
                        </label>
                        <input className="btn btn-primary  bg-gradient-to-r from-primary to-secondary uppercase mt-5 mb-3 text-white   font-bold w-full max-w-xs" type="submit" value='Sing Up'   />
                        
                    </form>
    
                    <small><p>Alredy Have an Account ? <Link to='/login'>LOGIN</Link></p></small>
                    
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle}  className="btn btn-outline btn-secondary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Singup;