// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 실제 문제를 풀때는 브라우저에서 제공하는 replaceAll을 사용했으나 js에서는 사용이 불가하므로 만들어줌
function replaceAll(inputString, search, replacement) {
    const regex = new RegExp(search, 'g');
    return inputString.replace(regex, replacement);
}

function solution(s) {
    const numbers = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }

    // isNan 으로 숫자인지 판별하는 코드 추가시 프로그래머스에서는 런타임에러 발생함
    Object.entries(numbers).forEach(([key, value]) => {
        s = replaceAll(s, key, value)
    })

    return Number(s)
}

solution('one4seveneight')
solution('23four5six7')
solution('2three45sixseven')
solution('123')