// cards
import '../../Сomponents/Cards/cards.scss'
import '../../Сomponents/Cards/Find-room/find-room.scss'
import '../../Сomponents/Cards/Registration/registration.scss'
import '../../Сomponents/Cards/Card-room/card-room.scss'
import '../../Сomponents/Cards/Auth/auth.scss'

// rooms
import '../../Сomponents/Room/room.scss'
import '../../Сomponents/Room/room'

// page styles
import './index.scss'

// datepicker expanded
const datepickerExpanded = $('.datepicker--expanded')

if (datepickerExpanded.length > 0) {
  datepickerExpanded.datepicker({
    range: true,
  })
}
