function solution(s) {
    var answer = [0,0];
    var str = [];
    while(s.length > 1) {
        answer[0]++;
        str = s.split("0").filter(Boolean).join("")
        answer[1] += (s.length - str.length)
        s = str.length.toString(2);
    }
    return answer;
}