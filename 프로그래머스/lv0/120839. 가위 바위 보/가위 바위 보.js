function solution(rsp) {
    var answer = rsp.split("").map((v,i) => v === "2" ? v="0" : v === "0" ? v="5": v="2").join("");
    return answer;
}