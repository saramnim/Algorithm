function solution(before, after) {
    var bef = [...before].sort().join();
    var aft = [...after].sort().join();
    if(bef===aft){
        return 1;
    }else{
        return 0;
    }
    // return [...before].sort()
    // .filter((el,i) => el !== [...after].sort()[i]).length 
    // ? 0 : 1
}