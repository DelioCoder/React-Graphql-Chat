import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useSubscription } from '@apollo/client';

import { getUser } from '../../assets/data';
import { BiSend, BiInfoCircle } from 'react-icons/bi';

import { MESSAGE_SUBSCRIPTION } from '../../graphql/subscriptions/messages';
import { SENT_MESSAGE } from '../../graphql/mutations/messages';

export const Chat = () => {
    let userIndex = 'Jack';
    const [state, setState] = useState(
        {
            user: 'Jack',
            content: ''
        }
    );
    const params = useParams();
    const user = getUser(parseInt(params.chatId));
    const [sentMessage] = useMutation(SENT_MESSAGE);
    
    const onSend = () => {
        if (state.content.length > 0) {
            sentMessage({
                variables: state,
            });
        };
        setState({
            ...state,
            content: ''
        });
    }
    const { data } = useSubscription( MESSAGE_SUBSCRIPTION  );
    if (!data) {
        return null;
    }
    return (
        data ? (
            <main className='relative flex flex-col h-screen'>
            <div className='w-full h-20 shadow-md'>
                <div className="flex m-4">
                    <div className='flex w-full'>
                        <img
                            src={user.img}
                            alt="User_profile"
                            className='w-12 h-12 rounded-full'
                        />
                        <p className='font-semibold py-2 px-4 text-2xl'>
                            {user.nombre}
                        </p>
                    </div>
                    <div className='mt-1'>
                        <BiInfoCircle style={{ fontSize: '2.5rem', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <div className='w-full h-full '>
            {
                data.messages.map(({ id, user, content }, index) => (
                    <div key={index} className={`flex ${user === userIndex ? 'justify-end' : 'justify-start'} p-4`}>
                        <div className={`${user === userIndex ? 'bg-zinc-300 text-black' : 'bg-indigo-500 text-white'} p-4 rounded-lg max-w-md`}>
                            { content }
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16">
                <div className="flex m-3">
                    <input
                        type="text"
                        placeholder='Aa'
                        className='shadow appearance-none rounded-full h-10 w-full py-2 px-3 text-white bg-neutral-600 leading-tight focus:outline-none focus:shadow-outline'
                        value={state.content}
                        onChange={({ target }) => setState({ ...state, content: target.value })}
                    />
                    <BiSend
                        style={{ fontSize: '2.5rem', cursor: 'pointer' }}
                        onClick={() => onSend()}
                    />
                </div>
            </div>
        </main>
        ) : null
    )
}
