function solution(array, n) {
    var answer = array
    .filter(v => Math.abs(v-n)===Math.min(...array.map(v=>Math.abs(v-n))))
    .sort((a,b) => a-b)[0];
    return answer
}