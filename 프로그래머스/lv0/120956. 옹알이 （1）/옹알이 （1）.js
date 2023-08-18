function solution(babbling) {
    var answer = 0;
    const str1 = ["aya", "ye", "woo", "ma"];
    const filterBabbling = babbling.filter((v) => {
        let result = v
        str1.map((v2) => {
            if(v.includes(v2)){
                result = result.replace(v2,'')
            }})
        return !result
    })
    return filterBabbling.length;
}