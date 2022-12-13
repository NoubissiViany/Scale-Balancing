const scale1 = document.querySelector('.scale1')
const scale2 = document.querySelector('.scale2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn')
const para = document.querySelector('.p1')
let arr1 = [],
  arr2 = [],
  val,
  val2
let result1, result2

btn1.onclick = function input1 () {
  val = scale1.value
  arr1 = val.split(',')
  if (arr1.length === 2) {
    scale1.disabled = true
  } else {
    alert('The weight should not be more than 2 elements')
  }
}

btn2.onclick = function input2 () {
  val2 = scale2.value
  arr2 = val2.split(',')
  if (arr2.length === 4) {
    scale2.disabled = true
  } else {
    alert('The weight should not be more than 4 elements')
  }
}

btn3.onclick = function scaleBalancing () {
  let found = false, vall1, vall2
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result1 = parseInt(arr1[0]) + parseInt(arr2[i])
      result2 = parseInt(arr1[1]) + parseInt(arr2[j])
      if (result1 === result2) {
        found = true, vall1 = arr2[j], vall2 = arr2[i]
        break
      }
    }
    if (found) break
  }
  if (found) {
    para.textContent = `The balance weight of ${arr1} are : ${vall1} and ${vall2}`
  } else {
    para.textContent = 'Scale Imbalanced'
  }
}
