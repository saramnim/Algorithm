function solution(my_string) {
    return [...my_string]
        .filter(a => ['a','e','i','o','u']
        .includes(a) ? false : true)
        .join("");
}