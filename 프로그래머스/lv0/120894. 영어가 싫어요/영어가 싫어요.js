function solution(numbers) {
    let engNum = [{
            eng: "zero", num: 0
        },{
            eng: "one", num: 1
        },{
            eng: "two", num: 2
        },{
            eng: "three", num: 3
        },{
            eng: "four", num: 4
        },{
            eng: "five",num: 5
        },{
            eng: "six", num: 6
        },{
            eng: "seven", num:7
        },{
            eng: "eight", num: 8
        },{
            eng: "nine", num: 9}];
        for(let i=0;i<engNum.length;i++){
            // if(numbers!==Number){
            //     numbers = numbers.replace(engNum[i].eng,engNum[i].num)
            // }
            numbers = numbers.split(engNum[i].eng).join(engNum[i].num)
        }
    
    return Number(numbers);
}