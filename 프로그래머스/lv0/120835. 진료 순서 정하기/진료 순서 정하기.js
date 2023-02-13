function solution(emergency) {
    var answer = emergency.slice().sort((a,b) => b-a)
    answer = emergency.map(v => answer.indexOf(v)+1);
    return answer;
}