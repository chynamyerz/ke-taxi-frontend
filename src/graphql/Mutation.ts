import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $name: String!
    $emailAddress: String!
    $cell: String!
    $password: String!
  ) {
    signup(
      name: $name
      email: $emailAddress
      cell: $cell
      password: $password
    ) {
      id
      name
      email
    }
  }
`;
