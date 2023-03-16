function solution(n) {
    var answer = 0;
    var cnt = 0;
    for(let i=1; cnt < n; i++){
        while(i % 3 === 0 || String(i).includes("3")) i++
        cnt++
        answer = i
    }
    return answer;
}