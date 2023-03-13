// function solution(sizes) {
//     sizes = sizes.flat().sort((a,b) => a - b)
//     return sizes[parseInt((sizes.length-1)/2)]*sizes[sizes.length-1];
// }
function solution(sizes) {
    var answer = [[],[]];
    for (let v of sizes) {
        v.sort((a,b) => b - a)
        answer[0].push(v[0])
        answer[1].push(v[1])
    }
    return Math.max(...answer[0])*Math.max(...answer[1]);
}