// Code your solution here
function findMatching (source, sought) {
    return source.filter(possibleMatch =>
        possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(source, tester) {
    return source.filter(possibleMatch =>
        possibleMatch.toLowerCase().indexOf(tester.toLowerCase())=== 0
    )
}

function matchName(source, soughtName) {
    return source.filter(record => record.name === soughtName)
}
