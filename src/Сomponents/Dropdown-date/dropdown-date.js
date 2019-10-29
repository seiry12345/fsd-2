import 'inputmask/css/inputmask.css'
import 'inputmask/dist/inputmask/jquery.inputmask'
import 'inputmask/dist/inputmask/bindings/inputmask.binding'

import 'air-datepicker/dist/css/datepicker.min.css'
import 'air-datepicker/dist/js/datepicker.min'

const dropdownDate = $('.dropdown-date__item .dropdown-date__input')
const dropdownRange = $('.dropdown-date__item-range .dropdown-date__input')
const dropdownFiltered = $('.dropdown-date__item-filter .dropdown-date__input')


// mask
dropdownDate.inputmask(
  '99.99.9999',
  {
    'placeholder': 'ДД.ММ.ГГГГ',
  },
  {
    'alias': 'datetime',
  },
)

dropdownFiltered.inputmask(
  {
    'mask': '9{1,2} a{3} - 9{1,2} a{3}',
  },
  {
    'placeholder': 'ДД.МММ - ДД.МММ',
  },
  {
    'alias': 'datetime',
  },
)

// air date picker
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
if (dropdownFiltered.length) {
  dropdownFiltered.datepicker({
    range: true,
    dateFormat: 'dd/mm/yyyy',
  })
}