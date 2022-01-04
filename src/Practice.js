/**
 * @param {array} apps
 */
 function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]