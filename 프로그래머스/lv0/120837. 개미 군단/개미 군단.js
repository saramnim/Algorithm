function solution(hp) {    
    var answer = hp%5==0 ? hp/5 
    : hp/5%3==0 ? hp/5+hp%5/3 
    : hp/5 + Math.floor(hp%5/3) + hp%5%3;
    return Math.floor(answer);
    // return Math.floor(12%5/3)
}