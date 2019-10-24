const numbers = $('.label-right__number');
const min = $('.label-right__number-min');
const max = $('.label-right__number-max');

// format to ru
function formatNumber (numb) {
  return Number(numb, 10).toLocaleString('ru');
}

// format on init
numbers.each((i, numb) => {
  let numbText = $(numb).text();
  $(numb).text(formatNumber(numbText) + "₽");
});


$('.js-range-slider').ionRangeSlider({
  type: "double",
  skin: "round",
  onChange: function (data) {
    min.text(formatNumber(data.from) + "₽");
    max.text(formatNumber(data.to) + "₽");
  }
});
