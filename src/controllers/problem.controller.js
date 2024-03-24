const { StatusCodes } = require('http-status-codes');
const Unauthorized = require('../errors/unauthorized.error');
const NotFound = require('../errors/notFound.error');
const { ServiceUnavailable, NotImplemented, BadRequest } = require('../errors');

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up' });
}

function addProblem(req, res, next) {
    try {
        // nothing implemented
        throw new BadRequest('Add Problem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    try {
        // nothing implemented
        throw new ServiceUnavailable('Add Problem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}

/**
 * 
 * res
 * 
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 * 
 */