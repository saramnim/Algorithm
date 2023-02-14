function solution(s) {
    var answer = [];
    s= [...s].sort().map(i => s.indexOf(i) === s.lastIndexOf(i) && answer.push(i))
    return answer.join("");
}