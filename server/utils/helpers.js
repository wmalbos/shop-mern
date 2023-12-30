const {HTTP_STATUS} = require("./constants");

/**
 * Creates a "Not Found" error for a specific entity type and id.
 *
 * @param {string} entityType - The type of the entity that was not found.
 * @param {string} id - The id of the entity that was not found.
 * @returns {Error} - The "Not Found" error with a specific status code.
 */
const handleNotFound = (entityType, id) => {
    const error = new Error(`${entityType} with id ${id} was not found.`);
    error.status = 404;
    return error;
};

/**
 * Sends a response to the client.
 *
 * @param {Object} params - The parameters for sending the response.
 * @param {Object} params.res - The response object.
 * @param {number} [params.status=200] - The status code of the response.
 * @param {string} [params.statusMessage=STATUS.SUCCESS] - The status message of the response.
 * @param {Object} [params.data={}] - The data to be included in the response.
 * @param {string} [params.message=''] - The message to be included in the response.
 * @param {number|null} [params.total=null] - The total number of items in the response.
 * @returns {Object} - The response object sent to the client.
 */
const sendResponse = ({
                          res,
                          status = 200,
                          statusMessage = HTTP_STATUS.SUCCESS,
                          data = {},
                          message = '',
                          total = null
                      }) => {
    let response = {status: statusMessage, data, message};
    if (total !== null) response.total = total;
    return res.status(status).json(response);
}


module.exports = {
    handleNotFound,
    sendResponse
};