import 'inputmask/css/inputmask.css'
import 'inputmask/dist/inputmask/jquery.inputmask'
import 'inputmask/dist/inputmask/bindings/inputmask.binding'

import 'air-datepicker/dist/css/datepicker.min.css'
import 'air-datepicker/dist/js/datepicker.min'

import moment from 'moment'
import '../../assets/js/common'
import common from '../../assets/js/common'

const dropdownDate = $('.dropdown-date__item .dropdown-date__input')
const dropdownRange = $('.dropdown-date__item-range .dropdown-date__input')
const dropdownFiltered = $('.dropdown-date__item-filter .dropdown-date__input')

// mask
if ($('.dropdown-date__item').hasClass('dropdown-date__item-filter')) {
  dropdownFiltered.inputmask(
    '9{2} a{3} - 9{2} a{3}',
    {
      'placeholder': 'ДД МММ - ДД МММ',
    },
    {
      'alias': 'datetime',
    },
  )
} else {
  dropdownDate.inputmask(
    '99.99.9999',
    {
      'placeholder': 'ДД.ММ.ГГГГ',
    },
    {
      'alias': 'datetime',
    },
  )
}

// air date picker
// range dates
if (dropdownRange.length > 0) {
  dropdownRange.datepicker({
    range: true,
    clearButton: true,
    onSelect: function(fd, d, picker) {
      const $this = $(picker.el)
      const $parent = $this.parents('.card-room')
      const dates = fd.split(',')

      // put values to input
      $this.parents('.dropdown-date__wrap').find('.dropdown-date__start').val(dates[0])
      $this.parents('.dropdown-date__wrap').find('.dropdown-date__end').val(dates[1])

      // calculating price on days picked
      if (dates[1] && $this.parents('.card-room').length > 0) {
        // get picked days number
        function getDaysNumber() {
          // get on data on change
          let from = dates[0].split('.')
          let to = dates[1].split('.')

          // format to int
          from = from.map(elem => Number(elem))
          to = to.map(elem => Number(elem))

          // change to date
          const fromFormatted = moment([from[2], from[1], from[0]])
          const toFormatted = moment([to[2], to[1], to[0]])

          // get difference
          return toFormatted.diff(fromFormatted, 'days') + 1
        }

        function reCalculateSum(daysNumber) {
          const daysPrice = Number($parent.find('.card-room__daysPrice').text().replace(/ /, ''))
          const feePrice = Number($parent.find('.card-room__fee').text().replace(/ /, ''))
          const additionalPrice = Number($parent.find('.card-room__additional').text().replace(/ /, ''))
          const daysSum = $parent.find('.card-room__daysSum')
          let daysSumVal = Number(daysSum.text().replace(/ /, ''))
          const total = $parent.find('.card-room__total-price span')
          let totalVal = Number(total.text().replace(/ /, ''))

          // recalculating
          daysSumVal = daysPrice * daysNumber
          totalVal = daysSumVal + additionalPrice - feePrice

          // printing
          daysSum.text(daysSumVal)
          total.text(totalVal)
        }

        function changeDaysText(daysNumber) {
          const daysNumberWrap = $parent.find('.card-room__daysNumber')
          const daysText = $parent.find('.card-room__daysText')
          const text = common.declOfNum(daysNumber, ['сутки', 'суток', 'суток'])

          daysNumberWrap.text(daysNumber)
          daysText.text(text)
        }

        const daysNumber = getDaysNumber()
        changeDaysText(daysNumber)
        reCalculateSum(daysNumber)
      }
    },
  })
}

// filtered dates
if (dropdownFiltered.length > 0) {
  dropdownFiltered.datepicker({
    range: true,
    dateFormat: 'dd M',
  })
}