const { StatusCodes } = require("http-status-codes");
const { NotImplemented, MethodNotAllowed } = require("../errors");
const BadRequest = require("../errors/badrequest.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res, next) {
  try {
    // Assuming only POST requests are used to create a new resource.
    if (req.method != "POST") {
      throw MethodNotAllowed(req.method, {});
    }
    // nothing implemented
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    if (req.method != "GET") {
      throw MethodNotAllowed(req.method, {});
    }
    // nothing implemented
    throw new NotImplemented("Get Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    if (req.method != "GET") {
      throw MethodNotAllowed(req.method, {});
    }
    // nothing implemented
    throw new NotImplemented("Get Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    if (req.method != "DELETE") {
      throw MethodNotAllowed(req.method, {});
    }
    // nothing implemented
    throw new NotImplemented("Delete Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  // Assuming PUT and PATCH are used to update a resource.
  try {
    if (req.method != "PUT" || request.method != "PATCH") {
      throw MethodNotAllowed(req.method, {});
    }
    // nothing implemented
    throw new NotImplemented("Update Problem");
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
  pingProblemController,
};

/**
 *
 * res
 *
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 *
 */
