function solution(n) {
    var answer = String(n).split("").reverse()
    .map(v => Number(v));
    return answer;
}