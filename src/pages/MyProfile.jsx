import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";

const MyProfile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdateInfo = (e) => {
        e.preventDefault();

        updateUser({ displayName: name, photoURL })
        .then(() => {
            setUser({ ...user, displayName: name, photoURL });
            toast.success("Profile updated successfully!");
        })
        .catch(() => {
            toast.error("Failed to update profile!");
        });
    }

    useDocumentTitle("Subscription Box | MyProfile");

    return (
        <div>
            <ToastContainer></ToastContainer>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto">
                <div className="w-11/12 mx-auto my-10 p-8 border border-gray-300 rounded shadow-sm">
                    <h1 className="text-2xl font-semibold mb-4 text-center">My Profile</h1>
                    <div className="text-center mb-6 flex flex-col gap-2">
                    <img className="mx-auto rounded-full w-32 h-32 object-cover" src={user?.photoURL} alt=""/>
                    <p className="mt-2 text-md text-gray-700 font-medium">Email : {user?.email}</p>
                    </div>
                    <form onSubmit={handleUpdateInfo} className="space-y-4">
                    <div>
                        <label className="block font-medium">Name</label>
                        <input className="input input-bordered w-full" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label className="block font-medium">Photo URL</label>
                        <input className="input input-bordered w-full" type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn bg-gray-200 border border-gray-300 w-full">Save Changes</button>
                    </form>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyProfile;
