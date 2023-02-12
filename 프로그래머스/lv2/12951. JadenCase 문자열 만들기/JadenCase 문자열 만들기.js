function solution(s) {
    
    var answer = s.split(" ")
    .map(v=>
         v.substring(0,1).toUpperCase()
         +v.substring(1).toLowerCase())
    .join(" ");
    return answer;
}