function solution(k, dungeons) {
    var answer = 0;
    const visited = Array.from({length: dungeons.length},() => false)
    const DFS = (hp,L) => {
        for(let i = 0; i < dungeons.length; i++){
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, L);
    }
    DFS(k, 0);
    return answer;
}