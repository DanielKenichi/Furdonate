import {Router} from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {version} from '../package.json'

const options = swaggerJsdoc.options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'API CATI final project',
            version,
        },
        servers: [{
                url:'http://localhost:3000',
                description: 'local server',
            },
        ],
    },
    apis: ['./routes/*.ts']
};

const spec = swaggerJsdoc(options);

const router = Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(spec));

export {router};



