
import "reflect-metadata";
import "./utils/connection"

import CategoryResolver from "./graphql/category/CategoryResolver";
import VideoResolver from "./graphql/video/VideoResolver";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            CategoryResolver,
            VideoResolver
        ]
    })

    const server = new ApolloServer({ schema })

    server.listen({ port: 4000 }, () => {
        console.log("App listen on port 4000 like a boss ")
    })
}

bootstrap()