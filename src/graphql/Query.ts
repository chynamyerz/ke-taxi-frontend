import gql from "graphql-tag";

export const USER_QUERY = gql`
  query user {
    user {
      id
      name
    }
  }
`;

export const USERS_QUERY = gql`
  query users {
    users {
      id
      name
    }
  }
`;
