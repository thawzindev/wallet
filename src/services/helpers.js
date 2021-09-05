export const phoneValidate = (phoneNumber) => {
    let myanmarPhoneRe = /^(09|\+?950?9|\+?95950?9)\d{7,9}$/;
    if (myanmarPhoneRe.test(phoneNumber)) return true;
    return false;
}

export const operatorCheck = (phoneNumber) => {
    
    const  operatorRe = {
        ooredoo: /^(09|\+?959)9(5|7|6)\d{7}$/,
        telenor: /^(09|\+?959)7([5-9])\d{7}$/,
        mytel: /^(09|\+?959)6(8|9)\d{7}$/,
        mpt: /^(09|\+?959)(5\d{6}|4\d{7,8}|2\d{6,8}|3\d{7,8}|6\d{6}|8\d{6}|7\d{7}|9(0|1|9)\d{5,6}|2[0-4]\d{5}|5[0-6]\d{5}|8[13-7]\d{5}|3[0-369]\d{6}|34\d{7}|4[1379]\d{6}|73\d{6}|91\d{6}|25\d{7}|26[0-5]\d{6}|40[0-4]\d{6}|42\d{7}|45\d{7}|89[6789]\d{6}|)$/,
    };

    if (operatorRe.ooredoo.test(phoneNumber)) {
        return 'ooredoo';
    } else if (operatorRe.telenor.test(phoneNumber)) {
        return 'telenor';
    } else if (operatorRe.mpt.test(phoneNumber)) {
        return 'mpt'
    } else if (operatorRe.mytel.test(phoneNumber)) {
        return 'mytel'
    } else {
        return 'unknown';
    }
}