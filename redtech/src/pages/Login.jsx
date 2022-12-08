import CompanyLogo from "../assets/CompanyLogo.png";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { authProvider } from "../services/authProvider";

export default function Login() {

    let [userEmail, setUserEmail] = useState("");
    let [userPassword, setUserPassword] = useState("");
    let [userAuthenticated, setUserAuthenticated] = useState(false);

    function handleSubmit(event) {
        const authenticator = authProvider
        
        authenticator.sign_in(userEmail, userPassword)

        if(authenticator.isAuthenticated) {
            setUserAuthenticated(true);
        } else  {
            alert("Invalid credentials! Try again");
            event.preventDefault();
        }
    }
    
    return (
        <>
            {userAuthenticated && <Navigate to="/content" />}
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                    className="mx-auto h-32 w-auto"
                    src={CompanyLogo}
                    alt="RedTech Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to your account
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email address"
                        value={userEmail} 
                        onChange={(event) => setUserEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                        value={userPassword} 
                        onChange={(event) => setUserPassword(event.target.value)}
                        />
                    </div>
                    </div>
        
                    <div>
                    <button
                        onClick={handleSubmit}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

