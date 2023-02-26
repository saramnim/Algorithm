function solution(sides) {
    var answer = [];
    sides = sides.sort((a,b) => a-b)
    for(let i=0;i<=sides[1];i++){
        if(i+sides[0]>sides[1]){
            answer.push(i)
        }
    }
    for(let i=sides[1];i<(sides[0]+sides[1]);i++){
        answer.push(i)
    }
    return answer.length-1;
}