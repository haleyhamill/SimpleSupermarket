function multiplyNumbers(numbers) {
    return numbers.reduce(function(total, current) {
        return total * current;
    }, 1)
}