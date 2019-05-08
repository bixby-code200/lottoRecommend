module.exports.function = function pickLotto (numberOfPick) {
  let result = ''
  let numbers = []
  let n = 0
  let iteration = 6
  if (numberOfPick) {
    iteration = numberOfPick
    if (iteration > 6) {
      return '로또 번호는 6개입니다.'
    }
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
  return result
}
