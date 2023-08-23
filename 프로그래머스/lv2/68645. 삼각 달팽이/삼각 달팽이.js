function solution(n) {
    var answer = Array.from({length: n}, (v,i) => new Array(i + 1).fill(0));
    let cnt = 0;
    let x = -1;
    let y= 0;
    while(n>0){
        for(let i = 0; i < n; i++) answer[++x][y] = ++cnt;
        for(let i = 0; i < n-1; i++) answer[x][++y] = ++cnt;
        for(let i = 0; i < n-2; i++) answer[--x][--y] = ++cnt;
        n -= 3;
    }
    return answer.flatMap(v => v);
}
