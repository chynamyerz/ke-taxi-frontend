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
 * Update user information
 *
 * parameters
 * cell:
 *      User's contact number
 * email:
 *      User's email address
 * image:
 *      User's url for the profile image
 * name:
 *      User's name
 * password:
 *      User's current password
 * newPassword:
 *      User's new password
 */
export const USER_UPDATE_MUTATION = gql`
  mutation USER_UPDATE_MUTATION(
    $cell: String
    $email: String
    $image: String
    $name: String
    $newPassword: String
    $password: String!
  ) {
    updateUser(
      cell: $cell
      email: $email
      image: $image
      name: $name
      newPassword: $newPassword
      password: $password
    ) {
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
