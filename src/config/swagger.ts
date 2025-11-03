import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Mi_Parada API',
            version: '2.0',
            description: 'The API for safe and efficient urban mobility management.',
            contact: {
                name: 'Mi_Parada Support',
            }
        },
        tags: [
            {
                name: 'Transports',
                description: 'Product management endpoints'
            },
            {
                name: 'Users',
                description: 'User management endpoints'
            },
            {
                name: 'Stops',
                description: 'Stops management endpoints'
            },
            {
                name: 'Schedules',
                description: 'Schedules management endpoints'
            },
            {
                name: 'Syndicates',
                description: 'Syndicates managements endpoints'
            }
        ],
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Development server',
            }
        ],
        
    },
    apis: [
        path.join(__dirname, '../routes/*.js'),
        path.join(__dirname, '../../src/routes/*.ts')
    ],
};

export const swagger = swaggerJSDoc(swaggerOptions);

export default swagger;