function solution(a, b) {
    return String(a/b).length <= 15 ? 1 : 2;
}

// function solution(a, b) {
//     var answer = (b % 2 === 0 || b % 5 === 0) || (b % a === 0)
//     && (a !== 0 || b!== 0) 
//     ? 1 : 2
//     return answer;
// }