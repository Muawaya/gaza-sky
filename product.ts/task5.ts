function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
//------------------------------------------------------------
console.log(isValidEmail("user@domain.com")); // true
console.log(isValidEmail("invalid-email")); // false


function isValidEmail(email: string): boolean {
    const atSymbolIndex = email.indexOf("@");
    if (atSymbolIndex === -1 || atSymbolIndex === 0 || atSymbolIndex === email.length - 1) {
        return false;
    }

    const dotIndex = email.indexOf(".", atSymbolIndex);
    if (dotIndex === -1 || dotIndex === atSymbolIndex + 1 || dotIndex === email.length - 1) {
        return false;
    }

    return true; 
}


