module.exports = {
    HTTP_STATUS:{
        SUCCESS: 200,
        CREATED: 201,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
    },
    ENVIROMENTS: {
        DEVELOPMENT: 'development',
        PRODUCTION: 'production',
        TEST: 'test',
    },
    ERROR_MESSAGES : {
        NOT_FOUND : 'Entity not found!',
        SERVER_ERROR: 'An error occurred on the server',
        ENDPOINTS_NOT_FOUND: 'Endpoints not found!',
    },
    INFOS_MESSAGES : {
      SERVER_SHUTTING_DOWN:'Received kill signal, shutting down server...',
      SERVER_SHUTDOWN: 'Server is shut down...',
    },
    SUCCESS_MESSAGES: {
        ENTITY_CREATED: 'Entity created with success',
        ENTITY_DELETED: 'Entity deleted with success',
        ENTITY_UPDATED: 'Entity updated with success',
    },
    DATABASE: {
        CONNECTING: 'Database connection is connecting',
        CONNECTED: 'Database connection is connected',
        DISCONNECTING: 'Database connection is disconnecting',
        DISCONNECTED: 'Database connection is disconnected',
        RECONNECTED: 'Database connection is reconnected',
        CLOSE: 'Database connection is closed',
        ERROR: (error) => `Database Connectivity Error : ${error}`,
    }
}