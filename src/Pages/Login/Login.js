import React from 'react';
// import { useform } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';





const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      let signInError;

      if(loading ||loading1){
        return <Loading></Loading>
      }
      if(error|| error1){
          signInError = <p className='text-red-500'>{error?.message || error1?.message}</p>
      }

     if(user|| user1){
         console.log(user || user1)
          navigate(from, { replace: true });
     }

    const onSubmit = data =>{
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password)
    }
        
    return (
        <div>
            <div className="hero min-h-screen">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password is Required'
                                        },
                                        pattern: {
                                            minLength: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                                </label>
                            </div>
                                     {signInError}   
                            <input className='btn w-full max-w-xs text-white' type="submit" value='Login'/>

                        </form>
                        <p>New Doctors Protal <Link to='/signup' className='text-secondary'>Create new account</Link></p>

                        <div className="divider">OR</div>

                        <button
                            onClick={() =>{signInWithGoogle()}}
                            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;