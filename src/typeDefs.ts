import { gql } from "apollo-server-express";

const typeDefs = gql `
    type Query {
        fetchCategories: [String!]!
        fetchRandomJoke(category: String!): Joke!
    }

    type Joke {
        id: ID!
        categories: [String]
        url: String
        icon_url: String
        value: String!
        created_at: String
        updated_at: String
    }
`;

export default typeDefs;
