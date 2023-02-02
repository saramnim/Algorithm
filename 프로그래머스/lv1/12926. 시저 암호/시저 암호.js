function solution(s, n) {
    var str = s.split("")
    var answer = []
    for (let i=0;i<str.length;i++){
        if (str[i] == ' ') answer.push(' ') ;
        else {
            let el = s.charCodeAt(i)
            if(el >= 65 && el <= 90){
                if(el+n >= 91){
                    answer.push(String.fromCharCode(el+n-26))
                }else{
                    answer.push(String.fromCharCode(el+n))
                }
            }else if(el >= 97 && el <= 122){
                el + n > 122 ? answer.push(String.fromCharCode(el+n-26)) : answer.push(String.fromCharCode(el + n))
            }
        }
    }
    return answer.join("");
}