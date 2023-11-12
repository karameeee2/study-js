// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    let num1 = num_list.reduce((multi, num) => {
        return multi *= num
    }, 1)

    let num2 = num_list.reduce((sum, num) => {
        return sum += num
    }, 0)

    if (num1 < Math.pow(num2, 2)) {
        return 1
    } else {
        return 0
    }
}

solution([3, 4, 5, 2, 1])
solution([5, 7, 8, 3])
