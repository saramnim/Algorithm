
function solution(s) {
    return s.split(" ").map(v => {
        let el = [...v]
        return el.map((v2, i2) => {
            if(i2 % 2 === 0 ) return v2.toUpperCase()
            else return v2.toLowerCase()
        }).join("")
    }).join(" ");;
}