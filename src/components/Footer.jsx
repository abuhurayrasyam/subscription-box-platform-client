import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 border border-gray-200 shadow-xl text-base-content">
        <div className="footer sm:footer-horizontal w-11/12 mx-auto p-5 lg:justify-around">
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to={'/'} target="_blank" className="link link-hover">Terms and Conditions</Link>
                <Link to={'/'} target="_blank" className="link link-hover">Privacy Policy</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 items-center">
                <Link to={'https://www.x.com'} target="_blank">
                    <FaXTwitter size={23} />
                </Link>
                <Link to={'https://www.instagram.com'} target="_blank">
                    <FaInstagram size={24} />
                </Link>
                <Link to={'https://www.facebook.com'} target="_blank">
                <FaFacebookF size={24} />
                </Link>
                </div>
            </nav>
        </div>
        <div className="bg-base-300 py-4">
            <p className="text-center w-11/12 mx-auto md:text-sm text-[12px]">Copyright © {new Date().getFullYear()} - All right reserved by Subscription Box Platform</p>
        </div>
    </footer>
  );
};

export default Footer;
