import {ApolloServer} from "apollo-server-express";
import { Application } from 'express';
import * as Query from './queries';
import typeDefs from "./typeDefs";

/**
 * starts the app
 * @param app
 */
const startServer = (app: Application) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: { Query },
        introspection: true,
    });
    const port: string | number = process.env.PORT|| 5000;
    const graphqlPath: string = "/graphql";

    server.applyMiddleware({app, path: graphqlPath});

    app.listen(port, () =>
         console.log(`node server running at http://localhost:${port}${graphqlPath}`)
    );
};

export default startServer;

