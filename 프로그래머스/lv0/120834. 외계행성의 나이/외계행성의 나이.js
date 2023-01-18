function solution(age) {
    var answer = '';
    let ageInput = String(age).split("")
    let ageChange = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for(let i=0;i<ageInput.length;i++){
        answer += ageChange[Number(ageInput[i])]
    }
    return answer;
}