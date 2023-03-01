// function solution(n) {
//     var answer = 0;
//     for(let i = 4; i<=n/2;i++){
//         if(n/i===i) answer +=i
//     }
//     return answer ? (answer+1)**2 : -1;
// }
function solution(n) {
    var answer = 0;
    for(let i = 1; i**2<=n;i++){
        if(n/i===i) answer +=i
    }
    return answer ? (answer+1)**2 : -1;
}