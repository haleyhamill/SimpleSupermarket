const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
}