function solution(array) {
    var answer = [...array].join("").split("").reduce((cnt, el) => cnt + ("7" == el.toString().split("")),0);
    return answer;
}