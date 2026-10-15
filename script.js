function deepEquals(a, b) {
	// Check if both values are NaN
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    // Check if values are strictly equal
    if (a === b) {
        return true;
    }

    // Check if types are different or either value is null
    if (typeof a !== typeof b || a === null || b === null) {
        return false;
    }

    // Check if both values are objects
    if (typeof a !== "object") {
        return false;
    }

    // Check if both are arrays
    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }

    // Compare arrays
    if (Array.isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!deepEquals(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    // Compare objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
            return false;
        }

        if (!deepEquals(a[key], b[key])) {
            return false;
        }
    }

    return true;
 
}

module.exports=deepEquals;
