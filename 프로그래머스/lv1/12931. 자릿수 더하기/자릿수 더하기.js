function solution(n)
{
    var answer = String(n).split("").join("+");
    return eval(answer);
}