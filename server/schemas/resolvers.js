const { Answers } = require('../models')

const resolvers = {
    Query: {
        getAnswers: async () => {
            const answers = await Answers.find();
            return answers;
        }
    },
    Mutation: {
        addAnswers: async (parent, args) => {
            const answers = await Answers.create(args);

            return answers;
        }
    }
};

module.exports = resolvers;