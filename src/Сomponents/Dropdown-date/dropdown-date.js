const dropdownDate = $('.dropdown-date__item .dropdown-date__input')
const dropdownRange = $('.dropdown-date__item-range .dropdown-date__input')
const dropdownFilter = $('.dropdown-date__item-filter .dropdown-date__input')

// mask to all dates
if (dropdownDate.length) {
  dropdownDate.inputmask({alias: '99.99.9999'})
}

// range dates
if (dropdownRange.length) {
  dropdownRange.datepicker({
    range: true,
    onSelect: function(fd, d, picker) {
      $('.dropdown-date__start').val(fd.split(',')[0])
      $('.dropdown-date__end').val(fd.split(',')[1])
    },
  })
}

// filtered dates
if (dropdownFilter.length) {
  dropdownFilter.datepicker({
    range: true,
    onSelect: function(fd, d, picker) {
      console.log(d,
        picker)
    }
  })
}