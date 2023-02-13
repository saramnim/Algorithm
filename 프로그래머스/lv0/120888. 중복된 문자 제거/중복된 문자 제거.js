function solution(my_string) {
    var answer = [];
    my_string.split("")
        .map(v => !answer.includes(v) 
             && answer.push(v))
    return answer.join("");
}