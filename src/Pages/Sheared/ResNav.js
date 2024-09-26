import { ArrowLeftEndOnRectangleIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/16/solid';
import { Bars3Icon, ClipboardDocumentCheckIcon, HandThumbUpIcon, HomeIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase.init.js/Firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import './NavLink.css';

const ResNav = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const singout = () => {
        signOut();
        localStorage.removeItem('accessToken');
    }
    return (
        <header>
            <nav className='flex justify-between items-center w-full h-[10vh] bg-blue-200  top-0 z-[2] fixed'>
                <div className="logo"> <Link className="btn  text-3xl lg:ml-20">Doctor-Portal</Link></div>
                <div onClick={() => setOpen(!open)} className='lg:hidden flex justify-start w-[10] h-10 mr-10'>
                    {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
                </div>
                <ul className={`lg:flex lg:mr-20 mr-4  lg:mt-0  lg:bg-transparent lg:static lg:p-0 p-[2vw]  absolute duration-700 ease-in  bg-black rounded-2xl z-[-2] ${open ? 'top-[10vh] right-0 ' : 'top-[-200vh] right-0'}`}>
                    <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><HomeIcon className='w-8 h-8 lg:hidden inline text-green-500'></HomeIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='home'>Home</NavLink></li>
                    <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><ClipboardDocumentCheckIcon className='w-8 h-8 lg:hidden inline text-green-500'></ClipboardDocumentCheckIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='appointment'>Appointment</NavLink></li>
                    <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><HandThumbUpIcon className='w-8 h-8 lg:hidden inline text-green-500'></HandThumbUpIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='about'>Reviews</NavLink></li>
                    {
                        user && <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><InformationCircleIcon className='w-8 h-8 lg:hidden inline text-green-500'></InformationCircleIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='dashboard'>Dashboard</NavLink></li>

                    }
                   {
                    user && <li> <label htmlFor="my-drawer-2" className="btn text-2xl flex items-center text-center lg:text-black text-green-500' lg:hidden">Sidebar</label></li>
                   }
                    <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><ChatBubbleLeftEllipsisIcon className='w-8 h-8 lg:hidden inline text-green-500'></ChatBubbleLeftEllipsisIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='about'>Contact Us</NavLink></li>
                    {
                        user ? <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><ArrowLeftEndOnRectangleIcon className='w-8 h-8 lg:hidden inline text-green-500'></ArrowLeftEndOnRectangleIcon><Link className='text-2xl text-center lg:text-black text-green-500' onClick={singout}>Logout</Link></li> : <li className='lg:ml-10 lg:mb-0 mb-8 flex items-center gap-5 lg:bg-transparent hover: lg:px-0 px-10 py-3 rounded-xl'><ArrowLeftEndOnRectangleIcon className='w-8 h-8 lg:hidden inline text-green-500'></ArrowLeftEndOnRectangleIcon><NavLink className='text-2xl text-center lg:text-black text-green-500' to='login'>Login</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default ResNav;