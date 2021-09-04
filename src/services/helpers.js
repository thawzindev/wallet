export const PhoneValidate = (phoneNumber) => {
    let myanmarPhoneRe = /^(09|\+?950?9|\+?95950?9)\d{7,9}$/;
    if (myanmarPhoneRe.test(phoneNumber)) return true;
    return false;
}