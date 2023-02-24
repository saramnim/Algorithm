function solution(n) {
    var str = ["수","박"];
    var answer = [];
    for(let i=1;i<=n;i++){
        if(i===1){
            answer.push(str[0])
        }
        else if(i%2===1){
            answer.push(str[0])
        }else if(i%2===0){
            answer.push(str[1])
        }
    }
    return answer.join("");
}