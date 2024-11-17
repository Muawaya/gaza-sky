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


