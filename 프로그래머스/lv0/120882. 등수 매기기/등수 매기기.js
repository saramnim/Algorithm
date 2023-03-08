function solution(score) {
    var answer = [];
    for(let i=0; i < score.length; i++){
        var sum = 0;
        for(let j = 0; j < score[i].length; j++){
            sum += score[i][j]
        }
        answer.push(sum/2)
    }let rank = answer.slice().sort((a,b) => b - a)
    return answer.map(v => rank.indexOf(v) + 1);
}
// function solution(score) {
//     var answer = score.map(v => (v[0] + v[1])/2)
//     let rank = answer.slice().sort((a,b) => b-a)
//     return answer.map(v => rank.indexOf(v) + 1)
// }