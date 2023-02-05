function solution(a, b) {
    var answer = 0;
    if(a<b){for(a;a<=b;a++){
        answer+=a
    }}else{for(b;b<=a;b++){
        answer+=b
    }}
    return answer;
}