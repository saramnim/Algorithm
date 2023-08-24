function solution(n, times) {
    times.sort((a,b) => a-b)
    let left = 1;
    let right = n * times[times.length - 1];
    let mid = Math.floor((left + right) / 2);
    while(left <= right){
        const cnt = times.reduce((result, cur) => result + Math.floor(mid / cur), 0);
        if(cnt >= n) right = mid - 1;
        else if(cnt < n) left = mid + 1
        mid = Math.floor((left+right)/2);
    }
    return left;
}