function solution(s) {
    const result = []
    const charIndexDic = {}
    s.split("").forEach((v,index)=>{
        if(charIndexDic[v] !== undefined){
            result.push(index - charIndexDic[v])
            charIndexDic[v] = index
        }else {
            result.push(-1)
            charIndexDic[v] = index
        }
    })
    return result;
}