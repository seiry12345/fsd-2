let isDown = false
let mouseTimer
let originText

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
  const target = $(event.target)
  let value
  let text = target.prev().text()

  //store origin text
  if (originText == undefined) {
    originText = target.parents('.form-item__dropdown').find('.dropdown').text()
  }

  // put value to container
  value = Number(text) + 1
  target.prev().text(value)

  // show clear btn
  if (target.parents('.dropdown-items').find('.dropdown__clear').length) {
    const clearBtn = target.parents('.dropdown-items').find('.dropdown__clear')

    if (value === 1 && !clearBtn.hasClass('dropdown__clear--active')) {
      clearBtn.addClass('dropdown__clear--active')
    }
  }

  // return originText
}

// minus value
function decrement(event) {
  const target = $(event.target)
  let value
  let text = target.next().text()


  // put value to container
  if (text > 0) {
    value = Number(text) - 1
    target.next().text(value)
  }

  // hide clear btn
  if (target.parents('.dropdown-items').find('.dropdown__clear').length) {
    const clearBtn = target.parents('.dropdown-items').find('.dropdown__clear')

    if (value === 0) {
      let result = 0
      const values = target.parents('.dropdown-items').find('.dropdown-controls__value')

      values.each((i, value) => {
        result += Number($(value).text())
      })

      if (result === 0) {
        clearBtn.removeClass('dropdown__clear--active')
      }
    }
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

function clear(event) {
  const target = $(event.target)
  const dropdown = target.parents('.form-item__dropdown').find('.dropdown')
  let values = target.parents('.form-item__dropdown').find('.dropdown-controls__value')

  values.each((i, value) => {
    $(value).text(0)
  })

  dropdown.text(originText)
}

function submit(event) {
  const target = $(event.target)
  let values = target.parents('.dropdown-items').find('.dropdown-controls__value')
  let result
  let output = 0
  let babies = 0

  // gather our data
  values.each((i, value) => {
    if ($(value).parent().prev().hasClass('separate')) {
      babies += Number($(value).text())
    } else {
      output += Number($(value).text())
    }
  })

  // print data to text field
  if (output > 0) {
    const outputText = declOfNum(output, ['гость', 'гостя', 'гостей'])

    if (babies > 0) {
      const babiesText = declOfNum(babies, ['младенец', 'младенца', 'младенцев'])

      result =  output + ' ' + outputText + ', ' + babies + ' ' + babiesText
      target.parents('.form-item__dropdown').find('.dropdown').text(result)
    } else {
      result = output + ' ' + outputText
      target.parents('.form-item__dropdown').find('.dropdown').text(result)
    }

    target.parents('.form-item__dropdown').find('.dropdown').removeClass('dropdown--active')
  }
}

// --- --- ---

// events
$('.dropdown').click(function(event) {
  toggleDropdown(event)
})

$('.dropdown-controls__btn-plus').on('click mousedown mouseup mouseleave', function(event) {
  event.type === 'mousedown' ? isDown = true : isDown = false

  if (event.type === 'click') {
    increment(event)
  }

  mousepress(function() {
    increment(event)
  }, 200)
})

$('.dropdown-controls__btn-minus').on('click mousedown mouseup mouseleave', function(event) {
  event.type === 'mousedown' ? isDown = true : isDown = false

  if (event.type === 'click') {
    decrement(event)
  }

  mousepress(function() {
    decrement(event)
  }, 200)
})

$('.dropdown__submit').click(function(event) {
  submit(event)
})

$('.dropdown__clear').click(function(event) {
  clear(event)
})
// --- --- ---
