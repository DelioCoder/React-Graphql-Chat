import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { data } from '../../assets/data';
import { Items } from './Items';

export const Sidebar = () => {
    return (
        <main className="flex">
            <section className='relative flex-none w-72 h-screen border-r-2 border-neutral-600 bg-neutral-800'>
                <div className='py-4'>
                    <p className='text-2xl font-semibold text-center text-white'>CHATS</p>
                    <div className='flex justify-center mt-4'>
                        <input 
                            type="text" 
                            placeholder='Buscar mensajes' 
                            className='shadow appearance-none border rounded w-60 py-2 px-3 text-white bg-neutral-600 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                </div>
                <div id='chats'>
                    {
                        data.map((user, index) => (
                            <div className='py-4 px-4' key={ index }>
                                <Items user={user} />
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-neutral-600">
                    <div className='flex flex-col text-white'>
                        <div className='py-2 px-2'>
                            <strong>Nombre: </strong> David
                        </div>
                        <div className='px-2'>
                            <strong>ID: </strong> 123456789
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-neutral-800 w-full text-white'>
                <Outlet />
            </section>
        </main>
    )
}
