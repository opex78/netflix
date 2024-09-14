import React, { useState, useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { checkValidData } from '../utils/validate';
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        // validate the field
        const errorMessage = checkValidData(email.current.value, password.current.value)
        setErrorMessage(errorMessage)

        if (errorMessage) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    console.log("successfully signed up", userCredential)
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            })
                        )
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("sign in is successful", user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }
        // if everything is passed from validation, call the API to check the credentials 

    }
    return (
        <div>
            <div className='absolute'>
                <Header />
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/ddb06507-9f12-4031-b222-a32c2344cab7/CA-en-20240827-TRIFECTA-perspective_WEB_6a9a6ec1-8681-400d-bce7-575a93485eaa_large.jpg"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-4/12 p-12 my-36 mx-auto right-0 left-0 absolute text-white rounded-lg bg-black bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input type="text" ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                )}
                <input type="text" ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type="password" ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
                <button className='p-4 my-4 w-full bg-red-700' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now." : "Already registerd? Sign In Now."}
                </p>
            </form>
        </div >
    )
}

export default Login