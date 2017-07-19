function solution(A) {
    if(A.length === 0) return 1;
    const N = A.length + 1;
    const totalSum = (N*(N+1))/2;
    return A.reduce((prev, curr)=>prev-curr,totalSum)
}