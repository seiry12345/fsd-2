const filterVars = {
  filter: $(".filter"),
  content: $(".filter").find(".filter__wrap"),
  btn: $(".filter").find(".filter__btn")
}

if (filterVars.filter.length > 0) {
  function toggleFilter() {
    filterVars.btn.toggleClass("filter__btn--active")
  }

  filterVars.btn.click(function(e) {
    const target = $(event.target)
    e.preventDefault()
      toggleFilter()
  })
}