import React from 'react';
// import { useform } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken((user || user1))

    let signInError;

    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }
    if (error || error1 || updateError) {
        signInError = <p className='text-red-500'>{error?.message || error1?.message || updateError?.message}</p>
    }

    if (token) {
        console.log(user || user1)
        navigate('/appointment')
    }

    //token er ager code

    // if (user || user1) {
    //     console.log(user || user1)
    //     // navigate('/appointment')
    // }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword
            (data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done')
        navigate('/appointment')

        
    }
    return (
        <div>
            <div className="hero min-h-screen">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>

                            </div>
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
                            <input className='btn w-full max-w-xs text-white'


                                type="submit" value='Sign Up' />

                        </form>
                        <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>

                        <div className="divider">OR</div>

                        <button
                            onClick={() => { signInWithGoogle() }}
                            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;