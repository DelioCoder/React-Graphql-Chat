import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
    query($userId: ID!) {
        getFriends(userId: $userId){
            id
            name
            lastname
            email
        }
    }
`;

export const GET_USER = gql`
    query($userId: ID!) {
        getUser(userId: $userId) {
            id
            name
            lastname
            email
        }
    }
`;