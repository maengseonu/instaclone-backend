import { gql } from "apollo-server-express";

export default gql`
  type Message {
    id: Int!
    payload: String!
    user: User!
    room: Room!
    read: Boolean!
    createAt: String!
    updatedAt: String!
  }
  type Room {
    id: Int!
    unreadTotal: Int!
    users: [User]
    messages: [Message]
    createAt: String!
    updatedAt: String!
  }
`;
