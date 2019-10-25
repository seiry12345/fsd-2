window.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body')
  const dropdown = document.querySelector('.dropdown')
  const dropdownFirstText = dropdown.textContent;
  const dropdownItem = document.querySelectorAll('.dropdown-item')
  const clearBtn = document.querySelector('.dropdown__clear')
  const submitBtn = document.querySelector('.dropdown__submit')

  // functions
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

  function clear() {
    dropdown.textContent = dropdownFirstText;
  }

  function submit() {
    let values = document.querySelectorAll('.dropdown-controls__value')
    values = Array.from(values)

    let output = values.map((value) => {
      return output += Number(value.textContent)
    })

    console.log(output)
  }

  function add(target) {
    const parent = target.parentNode

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

    if (parent.classList.contains('dropdown-controls__btn-minus')) {
      let value = parent.parentNode.children[1]
      let text = parent.parentNode.children[1].innerText

      if (text > 0) {
        text = parseInt(text)
        text--
        value.innerText = text
      }
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
    item.addEventListener('click', function (event) {
      const target = event.target;
      add(target)
      minus(target)
    })
  })

  // clear btn
  clearBtn.addEventListener('click', clear);

  // submit btn
  submitBtn.addEventListener('click', submit)
  // --- --- ---
})
