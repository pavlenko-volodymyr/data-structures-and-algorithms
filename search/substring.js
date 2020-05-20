function substringCount(str, substr) {
    if (str.length === 0 || str.length < substr.length) {
        return 0;
    }

    let substrCount = 0
    for (let i = 0; i <= str.length - substr.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) {
                break
            }

            if (j === substr.length - 1) {
                substrCount++
            }
        }
    }

    return substrCount;
}

console.log(substringCount("zomgzowgomg", "omg"))
console.log(substringCount("", "omg"))
console.log(substringCount("a", "a"))