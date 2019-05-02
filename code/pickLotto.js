module.exports.function = function pickLotto () {
  let result = ''
  let numbers = []
  let n = 0
  while (numbers.length < 6) {
    n = Math.ceil(Math.random() * 45)
    if (numbers.indexOf(n) < 0) {
      numbers.push(n)
      // result += n.toString() + ' '
    }
  }
  function compare (a, b) {return a - b} 
  numbers = numbers.sort(compare)
  numbers.forEach(number => {
    result += number.toString() + ' '
  })
  return result
}
