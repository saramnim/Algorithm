function solution(numbers) {
    // var answer = [1,2,3,4,5,6,7,8,9];
    numbers = numbers.map(v => Number(v))
    var answer = 45
    for(let i=0;i<numbers.length;i++){
        answer = answer-numbers[i]
    }
    
    return answer;
}