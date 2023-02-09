function solution(n, words) {
    var answer = [];
    for(let i=0;i<words.length;i++){
        if(i===0) answer.push(words[i])
        else if(
            !answer.includes(words[i]) && 
            words[i - 1][words[i - 1].length - 1] 
            === words[i][0]){
            answer.push(words[i]);
        }else{
            return [(i%n)+1,parseInt(i/n)+1]
        }
    }return [0,0]
}

//     for(let i=0;i<=words.length;i++){
//         if(words.map(v => v.slice(-1))[i]!==words.map(v => v.slice(0,1))[i+1] || w[i]===w[i+1]){
//             answer = [(i%n)+1,parseInt(i/n)+1]
//         }else answer = [0,0]
//         console.log(words.map(v => v.slice(-1))[0])
//     console.log(words[1].slice(0,1))
//     }