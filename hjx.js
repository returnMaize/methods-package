// 生成指定 位数 的随机数（默认为个位数）
function genRandomNum (digit = 1) {
  if (typeof digit !== 'number') {
    throw 'function genRandomNum parameter must be numeric'
  }
  let resStr = Math.ceil(Math.random() * 9) + ''
  while (--digit) {
    resStr += Math.floor(Math.random() * 10)
  }
  return Number(resStr)
}

// 获取对象所有原型
function getObjAllProto (obj) {
  const protoArr = []
  while (obj.__proto__) {
    protoArr.push(obj.__proto__.constructor.name)
    obj = obj.__proto__
  }
  return protoArr.join(' -> ')
}