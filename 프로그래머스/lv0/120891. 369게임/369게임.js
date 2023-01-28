function solution(order) {
    let arr = String(order).split("")
    let answer = arr.filter(e => e != 0 && e % 3 === 0).length;
    return answer;
}