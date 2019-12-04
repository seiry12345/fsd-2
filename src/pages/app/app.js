// scafolding
import '../../assets/scss/main.scss'

// common scripts
import '../../assets/js/common'

// --- --- --- libs --- --- --- //
//slick
import 'slick-slider/slick/slick'

// ion range slider
import 'ion-rangeslider/js/ion.rangeSlider'

// air datepicker
import 'air-datepicker/dist/js/datepicker'
// --- --- --- libs end --- --- --- //


// --- --- --- elements --- --- --- //
// dropdowns
import '../../components/dropdown/dropdown'
import '../../components/dropdown-date/dropdown-date'

// like btn
import '../../components/like-btn/like-btn'

// ion range
import '../../components/range/range-js'

// checkbox expandable
import '../../components/checkbox-expandable/checkbox-expandable'

// filter
import '../../components/filter/filter'

// hamburger
import '../../components/hamburger/hamburger'

//rooms
import '../../components/room/room'
// --- --- --- elements end --- --- --- //



// datepicker expanded
$(function() {
  const datepickerExpanded = $('.datepicker--expanded')

  if (datepickerExpanded.length > 0) {
    datepickerExpanded.datepicker({
      range: true,
    })
  }
})