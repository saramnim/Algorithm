function solution(my_string) {
    var answer = String(my_string.toLowerCase().split("").sort().join(""));
    return answer;
}