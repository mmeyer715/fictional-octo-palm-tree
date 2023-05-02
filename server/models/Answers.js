const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const answerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        phone: {
            type: String,
            required: true
        },
        socialSecurity: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true,
            // get: timestamp => dateFormat(timestamp)
        },
        // productType: {
        //     type: String,
        //     required: true
        // },
        licenseNum: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        mailStreet: {
            type: String,
            required: true
        },
        mailCity: {
            type: String,
            required: true
        },
        mailState: {
            type: String,
            required: true
        },
        mailZipcode: {
            type: String,
            required: true
        },
        multiLang: {
            type: String,
            required: true
        },
        assistantPrograms: {
            type: String,
            required: true
        },
        cultAreaDescript: {
            type: String,
            required: true
        },
        cultAccess: {
            type: String,
            required: true
        },
        cultivationShared: {
            type: String,
            required: true
        },
        trueInfo: {
            type: String,
            required: true
        },
        cultStreet: {
            type: String,
        },
        cultCity: {
            type: String,
        },
        cultState: {
            type: String,
        },
        cultZipcode: {
            type: String,
        },
        digitalPhoto: {
            type: String,
            required: true
        },
        governmentId: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Answers = model('Answers', answerSchema);

module.exports = Answers;