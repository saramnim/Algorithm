function solution(numbers) {
    numbers.sort((a,b) => a-b);
    numbers.reverse();
    var answer = numbers[0]*numbers[1];
    return answer;
}