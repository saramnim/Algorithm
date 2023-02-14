function solution(s){
    // var answer = Boolean(s);
    // if(s.indexOf(")")===0 || s.indexOf("(")===s.length-1){
    //     answer= false
    // }else if(s.split("(").filter(Boolean).length % 2 !== 0 || s.split(")").filter(Boolean).length % 2 !== 0){
    //     answer = false
    // }else{
    //     answer = true
    // }
    // return answer
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        answer += s[i] === '(' ? 1 : -1;
        if (answer < 0) return false;
    }
    return answer === 0 ? true : false;
}