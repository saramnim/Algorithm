// function solution(keyinput, board) {
//     var origin = board;
//     for(let i=0;i<keyinput.length;i++){
//         if(keyinput[i] === "left") 
//             board = [board[0]-1,board[1]]
//         if(keyinput[i] === "right")
//             board = [board[0]+1,board[1]]
//         if(keyinput[i] === "up")
//             board = [board[0],board[1]+1]
//         if(keyinput[i] === "down")
//             board = [board[0],board[1]-1]
//     }
//     var answer = [board[0]-origin[0],board[1]-origin[1]]
//     if(Math.abs(answer[0]) >= origin[0]/2){
//         answer[0] = -(~~(origin[0]/2))
//     }else if(answer[0] >= origin[0]/2){
//         answer[0] = ~~(origin[0]/2)
//     }
//     if(Math.abs(answer[1]) >= origin[1]/2){
//         answer[1] = -(~~(origin[1]/2))
//     }else if(answer[1] >= origin[1]/2){
//         answer[1] = ~~(origin[1]/2)
//     }
//     return answer;
// }
function solution(keyinput, board) {
    var now = [0,0];
    board = [(board[0]-1)/2, (board[1]-1)/2]
    for(let i=0;i<keyinput.length;i++){
        if(keyinput[i] === "left" && now[0] > -board[0]) 
            now[0] -= 1
        if(keyinput[i] === "right" && now[0] < board[0])
            now[0] += 1
        if(keyinput[i] === "up" && now[1] < board[1])
            now[1] += 1
        if(keyinput[i] === "down" && now[1] > -board[1])
            now[1] -= 1
    }
    return now;
}