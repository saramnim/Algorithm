function solution(my_string) {
    var answer = my_string.split("")
    .map(Number)
    .filter(e => !isNaN(e))
    .sort((a,b) => a-b);
    return answer;
}