/**
 * This object stores all regex's related to phone numbers
 */
const regex = {
    IR: new RegExp(/^(\+98)[0-9]{10}$/),
}

/**
 * This class is created to validate the data type
 */
export class PhoneNumber {
    /**
     * This function check if your data is float number or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isPhoneNumber(phoneNumber, country){

        // validation country
        

        return regex[country].test(phoneNumber)

    }
}