const authService = require('../../services/auth/auth.service');
const {sendResponse} = require('../../utils/helpers');
const logger = require('../../utils/logger');

const signUpController = async (req, res, next) => {};

const signInController = async (req, res, next) => {};

const requestResetPasswordController = async (req, res, next) => {};

const resetPasswordController = async (req, res, next) => {};

module.exports = {
    signUpController,
    signInController,
    requestResetPasswordController,
    resetPasswordController
}