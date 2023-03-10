function solution(number) {
    let cnt = 0;
    for (let i = 0; i < 13; i++) {
        for(let j = i+1; j < 13; j++) {
            for (let l = j+1; l < 13; l++){
                if (number[i] + number[j] + number[l] === 0) cnt++;
            }
        }
    }
    return cnt;
}