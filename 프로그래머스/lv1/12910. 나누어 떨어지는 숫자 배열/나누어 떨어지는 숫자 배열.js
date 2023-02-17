function solution(arr, divisor) {
    var answer = arr
    .sort((a,b) => a-b)
    .filter(v => v%divisor===0);
    
    return answer.length === 0 ? [-1] : answer;
}