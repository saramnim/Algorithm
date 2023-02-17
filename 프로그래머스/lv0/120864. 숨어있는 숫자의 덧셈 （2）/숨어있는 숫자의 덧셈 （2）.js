function solution(my_string) {
    var answer = 0;
    var str = [];
    [...my_string].map((v, i) => {
        if(!isNaN(Number(v))){
            str.push(Number(v))
            if(isNaN(Number([...my_string][i+1]))){
                answer += Number(str.join(""))
                str = []
            }
        }
    })
    return answer;
}