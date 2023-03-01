function solution(x, n) {
    var answer = [];
    for(y=x;answer.length<n;x+=y){
        answer.push(x)
    }
    return answer;
}