function solution(arr) {
    // var answer = arr.sort((a,b) => b-a).splice(arr[arr.length-1]);
    var answer = arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length === 0 ? [-1] : arr;
}