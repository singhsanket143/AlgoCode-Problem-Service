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
            const deleted_Problem = await Problem.findByIdAndDelete(id);
            if(!deleted_Problem) {
                throw new NotFound("Problem", id);
            }
            return deleted_Problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updateData) {
        try {
            const update_Problem_data = await Problem.findByIdAndUpdate(id, {
                title: updateData.title,
                description: updateData.description,
                testCases: updateData.testCases
            });
            if(!update_Problem_data) {
                throw new NotFound("Problem", id);
            }
            return update_Problem_data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;