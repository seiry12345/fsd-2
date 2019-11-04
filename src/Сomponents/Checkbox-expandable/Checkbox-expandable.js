$('.checkbox__title').click(function(event) {
  const target = $(event.target);

  target.parent().toggleClass('form__item-checkbox-expandable--active');
});
