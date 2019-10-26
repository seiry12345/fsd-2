let isDown = false
let mouseTimer

// functions
// склонения
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function toggleDropdown(event) {
  const item = $(event.target).parent()

  if ($(event.target).hasClass('dropdown')) {
    item.toggleClass('dropdown--active')
  }
}

// add value
function increment(event) {
  const target = event.target
  let valueContainer = target.previousElementSibling
  let value = target.previousElementSibling.textContent

  value = Number(value) + 1
  valueContainer.innerText = value
}

// minus value
function decrement(event) {
  const target = event.target
  let valueContainer = target.nextElementSibling
  let value = target.nextElementSibling.textContent

  if (value > 0) {
    value = Number(value) - 1
    valueContainer.innerText = value
  }
}

// mousepress imitation
function mousepress(callback, delay) {
  if (isDown) {
    mouseTimer = setInterval(callback, delay)
  } else {
    clearInterval(mouseTimer)
    return false
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
$('.dropdown').click(function(event) {
  toggleDropdown(event)
})

$('.dropdown-controls__btn-plus').on('click mousedown mouseup mouseleave', function(event) {
  if (event.type === 'click') {
    increment(event)
  }

  event.type === 'mousedown' ? isDown = true : isDown = false
  mousepress(function() {
    increment(event)
  }, 200)
})

$('.dropdown-controls__btn-minus').on('click mousedown mouseup mouseleave', function(event) {
  if (event.type === 'click') {
    decrement(event)
  }

  event.type === 'mousedown' ? isDown = true : isDown = false
  mousepress(function() {
    decrement(event)
  }, 200)
})
// --- --- ---
