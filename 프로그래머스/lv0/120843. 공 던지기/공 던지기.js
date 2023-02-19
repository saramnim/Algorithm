function solution(numbers, k) {
    var cnt = 0;
    var str = [];
    while(str.length < k){
        if(cnt > numbers.length-1){
            cnt-=numbers.length
        }
        str.push(numbers[cnt])
        cnt=cnt+2
    }
    return str[str.length-1];
}