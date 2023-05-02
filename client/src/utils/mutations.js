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
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        phone: $phone,
        socialSecurity: $socialSecurity,
        birthday: $birthday,
        licenseNum: $licenseNum,
        password: $password,
        street: $street,
        city: $city,
        state: $state,
        zipcode: $zipcode,
        mailStreet: $mailStreet,
        mailCity: $mailCity,
        mailState: $mailState,
        mailZipcode: $mailZipcode,
        multiLang: $multiLang,
        assistantPrograms: $assistantPrograms,
        cultAreaDescript: $cultAreaDescript,
        cultAccess: $cultAccess,
        cultivationShared: $cultivationShared
        trueInfo: $trueInfo,
        cultStreet: $cultStreet,
        cultCity: $cultCity,
        cultState: $cultState,
        cultZipcode: $cultZipcode,
        digitalPhoto: $digitalPhoto,
        governmentId: $governementId
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