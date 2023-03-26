function solution(polynomial) {
    var answer = [];
    var arr = polynomial.split(" ");
    var xarr = [];
    var num = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].split("").includes("x")) xarr.push(arr[i])
        else if(arr[i] !== "+") num+=(Number(arr[i]))
    }
    if(xarr.length){
        xarr = xarr.map(v=> v.split("x").map(v2 => v2 === "" ? v2 = 1 : v2))
        xarr = xarr.map(v => v.reduce((acc,cur) => acc * cur))
        xarr = xarr.reduce((acc,cur) => acc + cur)
        xarr !== 1 ? answer.push(xarr+"x") : answer.push("x")
    }
    num !== 0 ? answer.push(num) : 0
    return answer.join(" + ").toString();
}