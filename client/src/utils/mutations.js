import { gql } from '@apollo/client';

export const ADD_ANSWERS = gql`
mutation addAnswers(
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $phone: String!,
    $socialSecurity: String!,
    $birthday: String!,
    $productType: String!,
    $licenseNum: String!,
    $password: String!,
    $street: String!,
    $city: String!,
    $state: String!,
    $zipcode: String!,
    $mailStreet: String!,
    $mailCity: String!,
    $mailState: String!,
    $mailZipcode: String!,
    $multiLang: String!,
    $assistantPrograms: String!,
    $cultAreaDescript: String!,
    $cultAccess: String!,
    $cultivationShared: String!
    $trueInfo: String!,
    $cultStreet: String,
    $cultCity: String,
    $cultState: String,
    $cultZipcode: String,
    $digitalPhoto: String!,
    $governmentId: String!
){
    addAnswers(
        firstName: String!,
        lastName: String!,
        email: String!,
        phone: String!,
        socialSecurity: String!,
        birthday: String!,
        licenseNum: String!,
        password: String!,
        street: String!,
        city: String!,
        state: String!,
        zipcode: String!,
        mailStreet: String!,
        mailCity: String!,
        mailState: String!,
        mailZipcode: String!,
        multiLang: String!,
        assistantPrograms: String!,
        cultAreaDescript: String!,
        cultAccess: String!,
        cultivationShared: String!
        trueInfo: String!,
        cultStreet: String,
        cultCity: String,
        cultState: String,
        cultZipcode: String,
        digitalPhoto: String!,
        governmentId: String!
    ) {
        answers{
            _id
            firstName
            lastName
            email
        }
    }
}
`;