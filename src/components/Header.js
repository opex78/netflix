import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                src={LOGO}
                alt="logo" />

            {user && (
                <div className='flex p-2'>
                    <img className='w-12 h-12 m-2' src={user.photoURL} />
                    <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            )}


        </div>
    )
}

export default Header