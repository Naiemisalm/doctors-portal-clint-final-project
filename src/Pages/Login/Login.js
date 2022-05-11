import React from 'react';
import Button from '../Shared/Button';
import appointment from '../../assets/images/appointment.png'

const Login = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}>

            <div class="hero min-h-screen">

                <div class="hero-content ">

                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                            <div class="form-control">

                                <input type="text" placeholder="Email Address" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input type="text-area" placeholder="Your message" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <Button>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;