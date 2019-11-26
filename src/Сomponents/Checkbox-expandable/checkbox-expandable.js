$('.checkbox__title').click(function(event) {
  const target = $(event.target);

  target.parent().toggleClass('form-item__checkbox-expandable--active');
});
