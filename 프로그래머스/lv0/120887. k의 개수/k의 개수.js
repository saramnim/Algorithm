function solution(i, j, k) {
    var answer = [];
    for(i;i<=j;i++){
        String(i).split("").filter(el => el==k && answer.push(i))
    }
    return answer.length;
}