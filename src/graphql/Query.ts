import gql from "graphql-tag";

export const USER_QUERY = gql`
  query user {
    user {
      id
      cell
      email
      name
    }
  }
`;

export const USERS_QUERY = gql`
  query users {
    users {
      id
      cell
      email
      name
    }
  }
`;
