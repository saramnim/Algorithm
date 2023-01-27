function solution(my_string) {
    var str = my_string.split(" ");
    var answer = Number(str[0]);
    for(let i=1;i<str.length;i+=2){
        if(str[i] == "+"){
            answer += Number(str[i+1])
        }else{
            answer -= Number(str[i+1])
        }
    }
    return answer;
}