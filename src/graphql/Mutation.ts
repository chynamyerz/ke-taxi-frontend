import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $name: String!
    $email: String!
    $cell: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, cell: $cell, password: $password) {
      id
      name
      email
    }
  }
`;

/**
 * Get currently logged in user.
 *
 * The following arguments must be supplied.
 * email:
 *     The correct user email address.
 * password:
 *     The correct user password.
 */
export const GET_USER_MUTATION = gql`
  mutation GET_USER_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) @client
  }
`;

/**
 * Logout the currently logged in user.
 */
export const LOGOUT_USER_MUTATION = gql`
  mutation LOGOUT_USER_MUTATION {
    logout @client
  }
`;
