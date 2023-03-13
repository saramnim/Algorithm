// function solution(A, B) {
//     var a = [...A];
//     for(let i = 0; i < A.length; i++){
//         if(A === B)
//             return i;
//         else{
//             a.unshift(a.pop())
//             if(a.join('') === B)
//                 return i + 1
//         }
//     }
//     return -1;
// }
function solution(A, B) {
    var str = B + B;
    console.log(str)
    return str.indexOf(A)
}