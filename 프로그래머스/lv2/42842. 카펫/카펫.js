// function solution(brown, yellow) {
//     var arr = [];
//     var num = brown + yellow;
//     for(let i=0;i<=num;i++){
//         if(num % i === 0 ) arr.push(i)
//     }
//     var answer = arr.length % 2 === 0 
//     ? [arr[Math.floor(arr.length/2)],
//        arr[Math.floor(arr.length/2)-1]] 
//     : [arr[Math.floor(arr.length/2)],
//        arr[Math.floor(arr.length/2)]]
//     return answer;
// }
function solution(brown, yellow) {
    var sum = brown + yellow;
    for(var i=3;i <= sum / i;i++){
        var x = Math.floor(sum / i)
        if((x - 2) * (i - 2) === yellow){
            break
        }
    }
    return [x,i];
}