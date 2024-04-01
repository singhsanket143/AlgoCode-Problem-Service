const { StatusCodes } = require('http-status-codes');
const { NotImplementedError } = require('../errors/index');

function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

function addProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplementedError('Add Problem');
    } catch(error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplementedError('Get Problem');
    } catch(error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplementedError('Get Problems');
    } catch(error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplementedError('Delete Problem');
    } catch(error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplementedError('Update Problem');
    } catch(error) {
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