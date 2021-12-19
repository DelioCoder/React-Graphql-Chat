import React from 'react';
import { NavLink } from 'react-router-dom';

export const Items = ({ user }) => {
    return (
        <NavLink
            to={user.id.toString()}
            className={({ isActive }) => isActive ? 'transition cursor-pointer py-2 px-2 flex bg-indigo-500 rounded-lg duration-300' : 'transition cursor-pointer py-2 px-2 flex hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 rounded-lg duration-300'}
        >
            <img src='http://pm1.narvii.com/6350/119e892acea9bc0748f3c62c9f0eb3cdadd754ac_00.jpg' alt="User_img" className='h-12 w-12 rounded-full' />
            <div className='flex my-2 mx-3'>
                <p className='text-white font-semibold'>
                    {user.name}
                </p>
            </div>
        </NavLink>

    )
}
