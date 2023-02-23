function solution(n) {
    var answer = n.toString(2).split('').filter(v => v == 1);
    for(n = n + 1 ; n < n + n; n++) {
        let arr = (n).toString(2).split('').filter(v => v == 1);
        if (arr.length === answer.length) break;
    }
    return n;
}