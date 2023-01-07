function solution(array, height) {
    var result=0;
    for(let i=0;i<array.length;i++){
        if(height<array[i]){
            result++;
        }
    }
    return result
}