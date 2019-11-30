// scafolding
import '../../assets/scss/main.scss'

// jquery
import 'jquery/dist/jquery.min'

//slick
import 'slick-slider/slick/slick.css'
import 'slick-slider/slick/slick'

// ui kit logo
import '../../Сomponents/Ui-logo/ui-logo.scss'

// elements
import './index.scss'
import '../../Сomponents/Input/input.scss'
import '../../Сomponents/Button/button.scss'
import '../../Сomponents/Radio/radio.scss'
import '../../Сomponents/Toggle/toggle.scss'
import '../../Сomponents/Rate-btn/rate-btn.scss'

// dropdown
import '../../Сomponents/Dropdown/dropdown.scss'
import '../../Сomponents/Dropdown/dropdown'
import '../../Сomponents/Dropdown-date/dropdown-date.scss'
import '../../Сomponents/Dropdown-date/dropdown-date'

// cards
import '../../Сomponents/Cards/cards.scss'
import '../../Сomponents/Cards/Find-room/find-room.scss'
import '../../Сomponents/Cards/Registration/registration.scss'
import '../../Сomponents/Cards/Card-room/card-room.scss'
import '../../Сomponents/Cards/Auth/auth.scss'

// rooms
import '../../Сomponents/Room/room.scss'
import '../../Сomponents/Room/room'

// custom scripts
import '../../assets/js/common'

// datepicker expanded
const datepickerExpanded = $('.datepicker--expanded')

if (datepickerExpanded.length > 0) {
  datepickerExpanded.datepicker({
    range: true,
  })
}
