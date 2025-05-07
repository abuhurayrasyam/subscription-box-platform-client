import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ForgotPassword = () => {

    const {passwordResetEmail} = useContext(AuthContext);

    const location = useLocation();
    const emailRef = useRef();

    useEffect(() => {
        if (location.state?.email && emailRef.current) {
          emailRef.current.value = location.state.email;
        }
      }, [location]);

    const handleForgotPassword = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        passwordResetEmail(email)
        .then(() => {
            toast.success("Your password reset email has been sent successfully!", {autoClose: 300});
            setTimeout(() => {
                window.location.href = "https://mail.google.com/";
            }, 500);
        })
        .catch(() => {
            toast.error("Failed to send reset email. Please check the email address and try again.");
        });
    }

    useDocumentTitle("Subscription Box | Forgot Password");

    return (
        <div className="hero bg-base-100 my-10">

            <ToastContainer />

            <div className="card bg-base-100 border border-gray-300 w-full max-w-sm shrink-0 shadow-sm pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Forgot your password?</h1>
                    <form onSubmit={handleForgotPassword} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" ref={emailRef} placeholder="Enter your email" required />
                    <button type='submit' className="btn btn-neutral mt-4">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;