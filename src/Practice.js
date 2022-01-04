/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade
    });
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    return grades.filter(function(grade) {
        return grade >= 10;
    });
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    return grades.filter(function(grade) {
        return grade < 10;
    });
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}