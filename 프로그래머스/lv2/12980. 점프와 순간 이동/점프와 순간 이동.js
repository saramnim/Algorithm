function solution(n)
{
    var ans = 0;
    for(let i=0;0<n;i++){
        if(n%2===0) n=n/2
        else{
            n=n-1
            ans++
        }
    }

    return ans;
}