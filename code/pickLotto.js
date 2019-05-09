module.exports.function = function pickLotto (numberOfPick, addNumber) {
  const console = require('console')
  let result = ''
  let numbers = []
  let n = 0
  let error = false
  let iteration = 6
// numberOfPick이 들어오면 iteration을 numberOfPick으로 설정
  if (numberOfPick) {
    iteration = numberOfPick
    if (iteration > 6) {
      iteration = 6
      error = true
    }
  }
  
  if (addNumber) {
    addNumber.forEach(num => {
      numbers.push(num)
    })
  }
  
  while (numbers.length < iteration) {
    n = Math.ceil(Math.random() * 45)
    if (numbers.indexOf(n) < 0) {
      numbers.push(n)
   }
  }
  
  function compare (a, b) {return a - b} 
  numbers = numbers.sort(compare)
  result = numbers.join(', ')
  console.log(result)
  
  let msg = '결과를 확인하세요.'
  if (error) {
    msg = '로또 번호는 6개입니다.'
  }
  const resultStructure = {
    result: result,
    msg: msg
  }

  return resultStructure
}
