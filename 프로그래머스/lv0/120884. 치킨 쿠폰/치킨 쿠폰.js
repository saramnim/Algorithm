function solution(chicken) {
    var answer = chicken/10+chicken/100+chicken/1000+chicken/10000+chicken/100000+chicken/1000000;
    return parseInt(answer);
}