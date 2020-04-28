// 生成指定 位数 的随机数（默认为个位数）
function genRandomNum(digit = 1) {
  if (typeof digit !== 'number') {
    throw 'function genRandomNum parameter must be numeric'
  }
  let resStr = Math.ceil(Math.random() * 9) + ''
  while (--digit) {
    resStr += Math.floor(Math.random() * 10)
  }
  return Number(resStr)
}
