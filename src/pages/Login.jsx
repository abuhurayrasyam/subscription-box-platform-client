import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Login = () => {

    const {loginUser, signInViaGoogle} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        loginUser(email, password)
            .then(() => {
                toast.success("Logged in successfully!", {autoClose: 300});
                setTimeout(() => {
                navigate(`${location.state ? location.state : "/"}`)
            }, 500); 
            })
            .catch((error) => {
                const errorCode = error.code;
                
                if (errorCode === "auth/invalid-credential") {
                    toast.error("Incorrect email or password. Please try again.", {autoClose: 500});
                }
            });
    }

    const handleGoogleSignIn = () => {
        signInViaGoogle()
        .then(() => {
            toast.success("SignIn successfully!", {autoClose: 300});
            setTimeout(() => {
                navigate(`${location.state ? location.state : "/"}`)
            }, 500); 
        })
        .catch(() => {
        });
    }

    useDocumentTitle("Subscription Box | Login");

    return (
        <div className="hero bg-base-100 my-10">

            <ToastContainer />

            <div className="card bg-base-100 border border-gray-300 w-full max-w-sm shrink-0 shadow-sm pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Enter your email" required />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className="input" name="password" placeholder="Enter your password" required />
                        <button onClick={() => {setShowPassword(!showPassword)}} className='absolute top-3 right-7 cursor-pointer'>
                            {
                                showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />
                            }
                        </button>
                    </div>
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <h4 className="text-gray-500 text-center">Don't Have An Account ? <Link to={'/auth/register'} className="text-red-600">Register</Link></h4>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <h4 className="text-gray-600 text-sm">Or</h4>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline mt-1">
                    <FcGoogle className="text-xl" />
                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;