// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    let odd = ''
    let even = ''

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
            odd += num_list[i]
        } else {
            even += num_list[i]
        }
    }

    return Number(odd) + Number(even)
}

console.log(solution([3, 4, 5, 2, 1]))
console.log(solution([5, 7, 8, 3]))