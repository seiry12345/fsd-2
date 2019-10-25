const body = document.querySelector('body')
const dropdown = document.querySelector('.dropdown')
const dropdownFirstText = dropdown.textContent
const dropdownItem = document.querySelectorAll('.dropdown-item')
const clearBtn = document.querySelector('.dropdown__clear')
const submitBtn = document.querySelector('.dropdown__submit')

// functions
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function showItems(event) {
  const item = event.target.parentNode

  if (event.target.classList.contains('dropdown')) {
    item.classList.toggle('dropdown--active')
  }
}

function hideItems() {
  const activeItems = document.querySelectorAll('.dropdown--active')

  activeItems.forEach(item => {
    item.classList.remove('dropdown--active')
  })
}

function add(target) {
  const parent = target.parentNode
  const clearBtn = target.parentNode.parentNode.parentNode.parentNode

  // show clear btn
  let arr = Array.from(clearBtn.children)
  arr.forEach((child) => {
    if (child.classList.contains('dropdown__btns') && !child.children[0].classList.contains('dropdown__clear--active')) {
      child.children[0].classList.add('dropdown__clear--active')
    }
  })

  // plus to value
  if (parent.classList.contains('dropdown-controls__btn-plus')) {
    let value = parent.parentNode.children[1]
    let text = parent.parentNode.children[1].innerText

    text = parseInt(text)
    text++
    value.innerText = text
  }
}

function minus(target) {
  const parent = target.parentNode
  const clearBtn = target.parentNode.parentNode.parentNode.parentNode

  if (parent.classList.contains('dropdown-controls__btn-minus')) {
    let value = parent.parentNode.children[1]
    let text = parent.parentNode.children[1].innerText
    let arr = Array.from(clearBtn.children)

    // hide clear btn
    arr.forEach((child) => {
      if (child.classList.contains('dropdown__btns') && child.children[0].classList.contains('dropdown__clear--active') ) {
        child.children[0].classList.remove('dropdown__clear--active')
      }
    })

    // minus value
    if (text > 0) {
      text = parseInt(text)
      text--
      value.innerText = text
    }
  }
}

function clear() {
  let values = document.querySelectorAll('.dropdown-controls__value')

  values.forEach((value) => {
    value.textContent = '0'
  })

  dropdown.textContent = dropdownFirstText
}

function submit() {
  let values = document.querySelectorAll('.dropdown-controls__value')
  let output = 0
  let babies = 0

  // gather our data
  values.forEach((value) => {
    if (value.parentNode.previousElementSibling.classList.contains('separate')) {
      babies += Number(value.textContent)
    } else {
      output += Number(value.textContent)
    }
  })

  // print data to text field
  if (output > 0) {
    const outputText = declOfNum(output, ['гость', 'гостя', 'гостей'])

    if (babies > 0) {
      const babiesText = declOfNum(babies, ['младенец', 'младенца', 'младенцев'])
      this.parentNode.parentNode.previousElementSibling.textContent = output + ' ' + outputText + ', ' + babies + ' ' + babiesText
    } else {
      this.parentNode.parentNode.previousElementSibling.textContent = output + ' ' + outputText
    }

    this.parentNode.parentNode.parentNode.classList.remove('dropdown--active')
  }
}

// --- --- ---

// events
// toggle dropdown
body.addEventListener('click', function(event) {
  showItems(event)
})

// dropdown controls click clack
dropdownItem.forEach(function(item) {
  item.addEventListener('click', function(event) {
    const target = event.target
    add(target)
    minus(target)
  })
})

// clear btn
clearBtn.addEventListener('click', clear)

// submit btn
submitBtn.addEventListener('click', submit)
// --- --- ---
