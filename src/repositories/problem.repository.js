const NotFound = require('../errors/notfound.error');
const { Problem } = require('../models');

class ProblemRepository {

    async createProblem(problemData) {
        try {

            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });

            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const result = await Problem.findByIdAndDelete(id);
            if(!result){
                throw new NotFound('Problem',id);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id,data) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, data, { new: true });
            if (!updatedProblem) {
                throw new NotFound("Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;