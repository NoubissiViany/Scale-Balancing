const selectElement = document.querySelector('#select')
const output = document.querySelector('.heading2')
const capacity = document.querySelector('.capacity')
const heading = document.querySelector('.heading')
const heading1 = document.querySelector('.heading1')
const addItem = document.querySelector('.additem')
const reset = document.querySelector('.reset')
const done = document.querySelector('.done')
let selectedObj

const knapsack = {
  capacity: 0,
  weight: 0,
  value: 0,
  items: []
}

const items = [
  { name: 'Computer', weight: 20, value: 10 },
  { name: 'Laptop', weight: 15, value: 8 },
  { name: 'Iphone', weight: 14, value: 10 },
  { name: 'Andriod', weight: 15, value: 6 },
  { name: 'Shoes', weight: 7, value: 10 },
  { name: 'Bag', weight: 2, value: 5 },
  { name: 'Airpods', weight: 4, value: 9 },
  { name: 'Macbook', weight: 25, value: 30 }
]

reset.onclick = function reload () {
  window.location.reload()
}

done.onclick = function disable () {
  knapsack.capacity = capacity.value
  capacity.disabled = true
}

addItem.onclick = function getOption () {
  if (knapsack.capacity === 0) {
    alert('Please input the maximum capacity')
  } else {
    for (let i = 0; i < items.length; i++) {
      if (selectElement.value === items[i].name) {
        selectedObj = items[i]
        if (selectedObj.weight + knapsack.weight <= knapsack.capacity) {
          knapsack.items.push(selectedObj)
          knapsack.weight += selectedObj.weight
          knapsack.value += selectedObj.value
          heading.innerText = 'Knapsack Bag Include :'
          heading1.innerHTML = `Total Weight: ${knapsack.weight} | Total value: ${knapsack.value}
                               <br><br> Capacity: ${knapsack.capacity}`
          output.innerHTML += `Item: ${selectElement.value} | 
            weight: ${selectedObj.weight} |
            value: ${selectedObj.value} <br><br>`
          selectElement.remove(selectElement.selectedIndex)
        } else {
          alert('maximum capacity is exceeded')
        }

        console.log(knapsack.value, knapsack.weight)
        break
      }
    }
  }
}
