// scafolding
import '../../assets/scss/main.scss'

// ui kit logo
import '../../Сomponents/Ui-logo/ui-logo.scss'

// elements
import './index.scss'
import '../../Сomponents/Input/input.scss'
import '../../Сomponents/Dropdown/dropdown.scss'
import '../../Сomponents/Dropdown-date/dropdown-date.scss'
import '../../Сomponents/Button/button.scss'
import '../../Сomponents/Radio/radio.scss'
import '../../Сomponents/Toggle/toggle.scss'
import '../../Сomponents/Rate-btn/rate-btn.scss'
import '../../Сomponents/Room/room.scss'

// cards
import '../../Сomponents/Cards/cards.scss'
import '../../Сomponents/Cards/Find-room/find-room.scss'
import '../../Сomponents/Cards/Registration/registration.scss'
import '../../Сomponents/Cards/Card-room/card-room.scss'
import '../../Сomponents/Cards/Auth/auth.scss'

// jquery
import 'jquery/dist/jquery.min'
import "../../assets/js/common"

//slick
import 'slick-slider/slick/slick'
import 'slick-slider/slick/slick.css'

// custom scripts
import '../../Сomponents/Dropdown/dropdown'
import '../../Сomponents/Dropdown-date/dropdown-date'
import '../../Сomponents/Room/room'


// datepicker expanded
const datepickerExpanded = $('.datepicker--expanded')

if (datepickerExpanded.length > 0) {
  datepickerExpanded.datepicker({
    range: true,
  });
}
