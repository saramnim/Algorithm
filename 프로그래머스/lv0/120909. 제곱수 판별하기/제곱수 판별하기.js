function solution(n) {
    var answer = Number.isInteger(Math.sqrt(n));
    return answer ? 1 : 2;
}