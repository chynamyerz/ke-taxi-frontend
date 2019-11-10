import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($id: ID!, $name: String!) {
    createUser(id: $id, name: $name) {
      id
      name
    }
  }
`;
