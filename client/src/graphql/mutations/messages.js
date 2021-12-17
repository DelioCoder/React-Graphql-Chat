import { gql } from "@apollo/client";

export const SENT_MESSAGE = gql`
    mutation ( $user: String!, $content: String! ) {
        postMessage( user: $user, content: $content )
    }
`;