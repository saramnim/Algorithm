function solution(denum1, num1, denum2, num2) {
    var a = denum1*num2+denum2*num1;
    var b = num1*num2;
    var num = 1;
    for (let i=1;i<=a;i++){
        if(a % i === 0 && b % i === 0){
            num = i
        }
    }
    var answer = [a/num, b/num];
    return answer;
}