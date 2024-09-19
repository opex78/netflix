import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants'
import { toggleGptSeachView } from '../utils/gptSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    const handleGPTSearchClick = () => {
        dispatch(toggleGptSeachView())
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
                    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearchClick}>{showGPTSearch ? "Home Page" : "GPT Search"}</button>
                    <img className='w-12 h-12 m-2' src={user.photoURL} />
                    <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            )}


        </div>
    )
}

export default Header