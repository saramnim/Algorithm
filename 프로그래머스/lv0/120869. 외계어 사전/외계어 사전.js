// function solution(spell, dic) {
//     var answer = dic.map((v,i) => {
//         spell.map((a,j) => {
//             [...v].includes(a[j]) 
//                 ? 1 : 2
//         })
//     });
//     return answer;
// }

function solution(spell, dic) {
    var answer = dic.filter(
        v => spell.every(
            c => v.includes(c))).length
     ? 1 : 2
    return answer;
}