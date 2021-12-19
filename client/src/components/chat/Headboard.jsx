import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_USER } from '../../graphql/querys/Friends';

export const Headboard = () => {
    const params = useParams();
    const { data: { getUser } = {} } = useQuery(GET_USER, {
        variables: {
            userId: params.chatId
        }
    });
    let headMarkUp;
    if (!getUser) {
        headMarkUp = <p>Cargando cabecera...</p>
    } else {
        const {
            name,
        } = getUser;

        headMarkUp = (
            <>
                <img
                    src='http://pm1.narvii.com/6350/119e892acea9bc0748f3c62c9f0eb3cdadd754ac_00.jpg'
                    alt="User_profile"
                    className='w-12 h-12 rounded-full'
                />
                <p className='font-semibold py-2 px-4 text-2xl'>
                    {name}
                </p>
            </>
        )

    }
    return headMarkUp;
}
