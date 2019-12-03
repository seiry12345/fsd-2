import common from '../../assets/js/common'

let isDown = false
let mouseTimer
let originText

// functions
// склонения
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

  dataUpdate(event, decrement)

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

// updating data and put it to field on every change
function dataUpdate(event, decrement = false) {
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
        guestVal += value
      } else if (value > 0 && !item.hasClass('separate')) {
        guestVal -= value
      }

      // if dropdown item has class separate
      if (value > 0 && item.hasClass('separate')) {
        name = common.declOfNum(value, ['младенец', 'младенца', 'младенцев'])
        separateOutput.push(` ${value} ${name}`)
      }
    })

    let guestName = common.declOfNum(guestVal, ['гость', 'гостя', 'гостей'])
    output.push(`${guestVal} ${guestName}`)
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
  if (separateOutput.length) {
    result = output.concat(separateOutput)
  } else {
    result = output.join(', ')
  }
  textField.text(result)
}

// submit
function submit(event) {
  const target = $(event.target)
  console.log('sending data...')
  target.parents('.form-item__dropdown').removeClass('dropdown--active')
}

// events
// toggle dropdown
$('.dropdown').click(function(event) {
  toggleDropdown(event)
})

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

// submit
$('.dropdown__submit').click(function(event) {
  event.preventDefault()
  submit(event)
})

// clear dropdown items
$('.dropdown__clear').click(function(event) {
  clear(event)
})
