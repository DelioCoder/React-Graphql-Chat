import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
    subscription {
        messages {
            id
            user
            content
        }
    }
`;