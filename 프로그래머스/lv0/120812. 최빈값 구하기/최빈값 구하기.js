function solution(array) {
    const freq = [];
    let answer = 0;
    let mode = [];

    for (let num of array) {
        if (freq[num] === undefined) freq[num] = 1;
        else freq[num]++;

        if (freq[num] > answer) {
            answer = freq[num];
            mode = [num];
        } 
        else if (freq[num] === answer) mode.push(num);
    }
    if (mode.length >= 2) return -1;
    return mode[0];
}