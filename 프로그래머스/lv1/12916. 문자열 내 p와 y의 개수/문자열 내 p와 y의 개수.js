function solution(s){
    var answer1 = s.split("").filter(v => v === "p" || v === "P");
    var answer2 = s.split("").filter(v => v === "y" || v === "Y");
    console.log(answer1, answer2)
    return answer1.length === answer2.length ? true : false;
}