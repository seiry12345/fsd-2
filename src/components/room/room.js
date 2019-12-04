if ($('.room__slider').length > 0) {
  $('.room__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    speed: 600,
    fade: true,
    infinite: false,
  })
}

if ($(".room").length > 0) {
  const roomArr = $(".room")

  roomArr.each((i, elem) => {
    let room = $(elem)
    let review = room.find(".room__reviews-text")
    let value = Number(review.text())
    let name = declOfNum(value, ['Отзыв', 'Отзыва', 'Отзывов'])

    review.html(`<span>${value}</span> ${name}`)
  })

  function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
      ]
  }
}