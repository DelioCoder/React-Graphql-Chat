import React from 'react';
import { NavLink } from 'react-router-dom';

export const Items = ({ user }) => {
    return (
        <NavLink
            to={user.id.toString()}
            className={({ isActive }) => isActive ? 'transition cursor-pointer py-2 px-2 flex bg-indigo-500 rounded-lg duration-300' : 'transition cursor-pointer py-2 px-2 flex hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 rounded-lg duration-300'}
        >
            <img src={user.img} alt="User_img" className='h-12 w-12 rounded-full' />
            <div className='flex my-2 mx-3'>
                <p className='text-white font-semibold'>
                    {user.nombre}
                </p>
            </div>
        </NavLink>

    )
}
