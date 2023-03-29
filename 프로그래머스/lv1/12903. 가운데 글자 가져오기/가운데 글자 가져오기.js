function solution(s) {
    return s.length % 2 !== 0 ? s[parseInt((s.length-1)/2)] : s[~~((s.length-1)/2)]+s[~~((s.length-1)/2+1)];
}