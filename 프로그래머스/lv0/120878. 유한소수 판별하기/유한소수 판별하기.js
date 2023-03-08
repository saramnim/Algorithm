function solution(a, b) {
    var answer = String(a/b).length <= 15 ? 1 : 2
    return answer;
}

// function solution(a, b) {
//     var answer = b % 2 === 0 || b % 5 === 0 ? 1 : 2
//     return answer;
// }