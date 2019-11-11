let isDown = false
let mouseTimer
let originText

// functions
// склонения
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
    ]
}

function toggleDropdown(event) {
  const item = $(event.target).parent()

  if ($(event.target).hasClass('dropdown')) {
    item.toggleClass('dropdown--active')
  }
}

// increment
function increment(event) {
  const target = $(event.target)
  let value
  let text = target.prev().text()

  //store origin text
  if (originText == undefined) {
    originText = target
      .parents('.form-item__dropdown')
      .find('.dropdown')
      .text()
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

  // data update
  dataUpdate(event)
}

// decrement
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
      const values = target
        .parents('.dropdown-items')
        .find('.dropdown-controls__value')

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

// clear fields
function clear(event) {
  const target = $(event.target)
  const dropdown = target.parents('.form-item__dropdown').find('.dropdown')
  let values = target
    .parents('.form-item__dropdown')
    .find('.dropdown-controls__value')

  values.each((i, value) => {
    $(value).text(0)
  })

  dropdown.text(originText)
}

// --- --- ---

// updating data and put it to field on every change
function dataUpdate(event) {
  const target = $(event.target)
  const textField = target.parents('.form-item__dropdown').find('.dropdown')
  const container = target.parents('.dropdown-items')
  const dropItems = container.find('.dropdown-item')
  let output = []
  let guestVal = 0
  let separateOutput = []
  let result

  // data for guests
  if (container.hasClass('guests')) {
    dropItems.each((i, item) => {
      item = $(item)
      const value = Number(item.find('.dropdown-controls__value').text())
      let name = item.find('.dropdown-item__text').text()

      if (value > 0 && !item.hasClass('separate')) {
        name = declOfNum(value, ['гость', 'гостя', 'гостей'])
        guestVal += value
      }

      // if dropdown item has class separate
      if (value > 0 && item.hasClass('separate')) {
        name = declOfNum(name, ['младенец', 'младенца', 'младенцев'])
        separateOutput.push(`, ${value} ${name}`)
      }
    })

    output.push(`${guestVal} ${name} `)
  } else {
    // data for furniture
    dropItems.each((i, item) => {
      item = $(item)
      const value = Number(item.find('.dropdown-controls__value').text())
      const name = item.find('.dropdown-item__text').text()

      if (value > 0) {
        output.push(`${value} ${name}`)
      }
    })
  }

  // construct data to result and print it in text field
  if (separateOutput.lenght) {
    result = output.concat(separateOutput)
  } else {
    result = output.join(', ')
  }

  console.log(result)
  textField.text(result)
}

// --- --- ---

// submit
function submit(event) {
  const target = $(event.target)
  let values = target
    .parents('.dropdown-items')
    .find('.dropdown-controls__value')
  let result
  let output = 0
  let babies = 0

  // gather our data
  values.each((i, value) => {
    if (
      $(value)
        .parent()
        .prev()
        .hasClass('separate')
    ) {
      babies += Number($(value).text())
    } else {
      output += Number($(value).text())
      // TODO
    }
  })

  // print data to text field
  if (output > 0) {
    const outputText = declOfNum(output, ['гость', 'гостя', 'гостей'])
    const babiesText = declOfNum(babies, ['младенец', 'младенца', 'младенцев'])

    if (babies > 0) {
      result = `${output} ${outputText}, ${babies} ${babiesText}`
      target
        .parents('.form-item__dropdown')
        .find('.dropdown')
        .text(result)
    } else {
      result = `${output} ${outputText}`
      target
        .parents('.form-item__dropdown')
        .find('.dropdown')
        .text(result)
    }

    target.parents('.form-item__dropdown').removeClass('dropdown--active')
  }
}

// --- --- ---

// events
// toggle dropdown
$('.dropdown').click(function(event) {
  toggleDropdown(event)
})
// --- --- ---

// increment value
$('.dropdown-controls__btn-plus').on(
  'click mousedown mouseup mouseleave',
  function(event) {
    event.type === 'mousedown' ? (isDown = true) : (isDown = false)

    if (event.type === 'click') {
      increment(event)
    }

    mousepress(function() {
      increment(event)
    }, 200)
  },
)
// --- --- ---

// decrement value
$('.dropdown-controls__btn-minus').on(
  'click mousedown mouseup mouseleave',
  function(event) {
    event.type === 'mousedown' ? (isDown = true) : (isDown = false)

    if (event.type === 'click') {
      decrement(event)
    }

    mousepress(function() {
      decrement(event)
    }, 200)
  },
)
// --- --- ---

// submit
$('.dropdown__submit').click(function(event) {
  event.preventDefault()
  submit()
})
// --- --- ---

// clear btns
$('.dropdown__clear').click(function(event) {
  clear(event)
})
// --- --- ---
