import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl);

        if (!/[a-z]/.test(password)) {
            toast.error('Must include at least one lowercase letter.');
            return;
          }
        if (!/[A-Z]/.test(password)) {
            toast.error('Must include at least one uppercase letter.');
            return;
        }
        if (!/\d/.test(password)) {
            toast.error('Must include at least one number.');
            return;
        }
        if (!/[!@#$%&*?]/.test(password)) {
            toast.error('Must include at least one special character (!@#$%&*?).');
            return;
        }
        if (password.length < 8) {
            toast.error('Must be at least 8 characters long.');
            return;
        }
          
        createUser(email, password)
            .then(() => {
                toast.success("Account created successfully!");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;

                let message = "Something went wrong. Please try again.";

                if (errorCode === "auth/email-already-in-use") {
                message = "This email is already registered.";
                }

                toast.error(message);
            })
    }

    return (
        <div className="hero bg-base-100 my-10">

            <ToastContainer />

            <div className="card bg-base-100 w-full border border-gray-300 max-w-sm shrink-0 shadow-xl pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Create an account</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" required />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photoUrl' placeholder="Enter your photo url" required />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Enter your email" required />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Enter your password" required />
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
                        <a className="link link-hover">Accept Term & Conditions</a>
                    </div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <h4 className="text-gray-500 text-center">Already Have an Account ? <Link to={'/auth/login'} className="text-red-600">Login</Link></h4>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <h4 className="text-gray-600 text-sm">Or</h4>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                    <button className="btn btn-outline mt-1">
                    <FcGoogle className="text-xl" />
                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;