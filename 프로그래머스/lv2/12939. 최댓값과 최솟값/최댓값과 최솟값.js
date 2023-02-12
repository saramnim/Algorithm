function solution(s) {
    var arr = s.split(" ").sort();
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    return min+" "+max;
}