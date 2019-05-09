module.exports.function = function pickLotto (numberOfPick, addNumber) {
  const console = require('console')
  let result = ''
  let numbers = []
  let n = 0
  let error = false
  let iteration = 6
  let msg = '결과를 확인하세요.'
// numberOfPick(추천 받을 갯수)이 들어오면 iteration을 numberOfPick으로 설정
  if (numberOfPick) {
    iteration = numberOfPick
    if (iteration > 6) {
      iteration = 6
      // 추천 받을 갯수가 6보다 크면 error을 true로 하여 리턴할 결과에 msg를 바꿈
      error = true
    }
  }
  // 추천 받을 때 추가할 숫자를 입력으로 받았으면 이를 결과에 포함
  if (addNumber) {
    addNumber.forEach(num => {
      if (num > 45 || num < 1) {
        msg = '로또 번호는 1~45 사이의 숫자입니다.'
      }
      else {
        numbers.push(num)
      }
    })
  }
  // 추천 받을 갯수 만큼 랜덤으로 숫자를 생성하여 결과에 포함
  while (numbers.length < iteration) {
    n = Math.ceil(Math.random() * 45)
    if (numbers.indexOf(n) < 0) {
      numbers.push(n)
   }
  }
  // 결과를 오름차순으로 정렬
  function compare (a, b) {return a - b} 
  numbers = numbers.sort(compare)
  result = numbers.join(', ')
  console.log(result)
  
  if (error) {
    msg = '로또 번호는 6개입니다.'
  }
  
  const resultStructure = {
    result: result,
    msg: msg
  }
  return resultStructure
}
