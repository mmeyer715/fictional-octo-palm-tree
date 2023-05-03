const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Answers {
        _id: ID
        firstName: String
        lastName: String
        email: String
        phone: String
        socialSecurity: String,
        birthday: String,
        licenseNum: String,
        password: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        mailStreet: String,
        mailCity: String,
        mailState: String,
        mailZipcode: String,
        multiLang: String,
        assistantPrograms: String,
        cultAreaDescript: String,
        cultAccess: String,
        cultivationShared: String
        trueInfo: String,
        cultStreet: String,
        cultCity: String,
        cultState: String,
        cultZipcode: String
        sameAsResidental: [String]
    }
    
    type Query {
        getAnswers: [Answers]
    }

    type Mutation {
        addAnswers(
            firstName: String!,
            lastName: String!,
            email: String!,
            phone: String!,
            socialSecurity: String!,
            birthday: String!,
            licenseNum: String,
            password: String!,
            street: String!,
            city: String!,
            state: String!,
            zipcode: String!,
            mailStreet: String,
            mailCity: String,
            mailState: String,
            mailZipcode: String,
            multiLang: String,
            assistantPrograms: String,
            cultAreaDescript: String,
            cultAccess: String,
            cultivationShared: String
            trueInfo: String,
            cultStreet: String,
            cultCity: String,
            cultState: String,
            cultZipcode: String,
            sameAsResidental: [String]

        ): Answers
    }
`;

module.exports = typeDefs;

