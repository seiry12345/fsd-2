let common = {
  declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
      ]
  },

  equalHeight(num, selector) {
    let items = $(selector)
    for (let i = 0; i < items.length; i = i + num) {
      let row = items.slice(i, i + num)
      let max = 0
      $(row).each(function() {
        if ($(this).height() > max) {
          max = $(this).height()
        }
      })
      $(row).height(max)
    }
  },
}

export default common;