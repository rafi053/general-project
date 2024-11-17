import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "school swagger",
        version: "1.0.0",
        description: "Show all the api endpoints",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
}

const options = {
    swaggerDefinition,
    apis: ["./javascript/routes/*.js", "./javascript/server.js"],
}

export const swaggerSpec = swaggerJsdoc(options)