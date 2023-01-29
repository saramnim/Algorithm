function solution(num, k) {
    var answer = String(num).split("").indexOf(String(k));
    answer !== -1 ? answer = answer + 1 : answer = answer
    return answer;
}