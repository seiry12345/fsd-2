// scafolding
import '../../assets/scss/main.scss'

// common scripts
import '../../assets/js/common'

// --- --- --- libs --- --- --- //
//slick
import 'slick-slider/slick/slick.css'
import 'slick-slider/slick/slick'

// ion range slider
import 'ion-rangeslider/css/ion.rangeSlider.css'
import 'ion-rangeslider/js/ion.rangeSlider'

// air datepicker
import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/css/datepicker.css'
// --- --- --- libs end --- --- --- //


// --- --- --- elements --- --- --- //
import '../../Сomponents/Input/input.scss'
import '../../Сomponents/Button/button.scss'
import '../../Сomponents/Checkbox/checkbox.scss'
import '../../Сomponents/Radio/radio.scss'
import '../../Сomponents/Rate-btn/rate-btn.scss'
import '../../Сomponents/Toggle/toggle.scss'
import '../../Сomponents/Pagination/pagination.scss'
import '../../Сomponents/Bullet-list/bullet-list.scss'
import '../../Сomponents/Advantages/advantages.scss'
import '../../Сomponents/Review/review.scss'

// dropdowns
import '../../Сomponents/Dropdown/dropdown.scss'
import '../../Сomponents/Dropdown-date/dropdown-date.scss'
import '../../Сomponents/Dropdown/dropdown'
import '../../Сomponents/Dropdown-date/dropdown-date'

// like btn
import '../../Сomponents/Like-btn/like-btn'
import '../../Сomponents/Like-btn/like-btn.scss'

// ion range
import '../../Сomponents/Range/range.scss'
import '../../Сomponents/Range/range-js'

// checkbox expandable
import '../../Сomponents/Checkbox-expandable/Checkbox-expandable.scss'
import '../../Сomponents/Checkbox-expandable/checkbox-expandable'

// filter
import '../../Сomponents/Filter/filter.scss'
import '../../Сomponents/Filter/filter'

// ui kit logo
import '../../Сomponents/Ui-logo/ui-logo.scss'

// header
import '../../Сomponents/Header/header.scss'
import '../../Сomponents/Hamburger/hamburger.scss'
import '../../Сomponents/Hamburger/hamburger'
import '../../Сomponents/Logo/logo.scss'
import '../../Сomponents/Navbar/navbar.scss'
import '../../Сomponents/User/user.scss'

// footer
import '../../Сomponents/Footer/footer.scss'
import '../../Сomponents/Navigation/navigation.scss'
import '../../Сomponents/Subscribe/subscribe.scss'
import '../../Сomponents/Copyrights/copyrights.scss'
import '../../Сomponents/Social/social.scss'

// cards
import '../../Сomponents/Cards/cards.scss'
import '../../Сomponents/Cards/Find-room/find-room.scss'
import '../../Сomponents/Cards/Registration/registration.scss'
import '../../Сomponents/Cards/Card-room/card-room.scss'
import '../../Сomponents/Cards/Auth/auth.scss'

// rooms
import '../../Сomponents/Room/room.scss'
import '../../Сomponents/Room/room'
// --- --- --- elements end --- --- --- //


// --- --- --- pages --- --- --- //
// colors and types
import '../colors/index'

// form elements
import '../form-elements/index'

// cards
import '../cards/index'

// headers and footers
import '../headers-footers/index'

// search room
import '../search-room/index'

// room detail
import '../room-detail/index'

// front page styles
import './index.scss'
// --- --- --- pages end --- --- --- //

// datepicker expanded
$(function() {
  const datepickerExpanded = $('.datepicker--expanded')

  if (datepickerExpanded.length > 0) {
    datepickerExpanded.datepicker({
      range: true,
    })
  }
})