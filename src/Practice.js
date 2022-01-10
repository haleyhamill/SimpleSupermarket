let grades = [10, 5, 15, 20];

let sum = grades.reduce(function(total, current) {
    return total + current;
}, 0);