function solution(balls, share) {
    return factorial(balls) / factorial(balls-share) / factorial(share);
}
const factorial = (num) => {
    let factNum = BigInt(1);
    for(let i = num;i >= 2; i--){
        factNum *= BigInt(i);
    }
    return factNum;
}