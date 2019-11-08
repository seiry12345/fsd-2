const btn = $('.like-btn');

btn.click(function(event) {
  const target = $(event.target);
  let targetText = parseInt(target.text(), 10);
  event.preventDefault();

  target.text(targetText + 1);
  target.addClass('like-btn--disabled');
});
