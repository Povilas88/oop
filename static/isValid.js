export class IsValid {
    static requiredLengthString(str, minLength, maxLength) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }

        return true;
    }

    static containsAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }

        return true;
    }

    static username(str) {
        const minLength = 4;
        const maxLength = 20;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!IsValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static email(str) {
        const minLength = 6;
        const maxLength = 50;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-+_';

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!IsValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static phone(str) {
        const minLength = 3;
        const maxLength = 20;
        const abc = '+-0123456789 ()';

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static name(str) {
        const minLength = 2;
        const maxLength = 20;
        const abc = ' 0123456789?!-+:;\\`@#$%^&/*()=_{}[]<>,.~\'"\r\n\t';

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static surname(str) {
        const minLength = 2;
        const maxLength = 20;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static password(str) {
        const minLength = 12;
        const maxLength = 100;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static IBAN(str) {
        // LT01 1234 1234 1234 1234
        const minLength = 20;
        const maxLength = 24;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static URL(str) {
        const minLength = 2;
        const maxLength = 3000;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    /*
    Input: TOP 5 - patiekalai per Šv. Kalėdas!
    Output: top-5-patiekalai-per-sv-kaledas
    */
    static urlSlug(str) {
        const minLength = 1;
        const maxLength = 150;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }
}