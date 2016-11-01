function iterativeLog(array) {
  array.forEach((element,index,array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ['cats','dogs','mice']
  callback(array)
  return array
}

function doToArray(array,callback) {
  array.forEach(callback)
}
