function solution(s) {
    s = s.split(" ")
    var answer = [];
    for(let i=0;i<=s.length;i++){
        if(s[i]==="Z"){
            s.splice(i-1,2)
            i-=2
        }
    }
    return s.reduce((a,b) => a + Number(b),0);
}