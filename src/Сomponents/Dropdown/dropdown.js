// // to do! about keypress and input

// window.addEventListener('DOMContentLoaded', function() {
//   const body = document.querySelector('body');

//   // functions
//   function showItems(event) {
//     const dropdown = event.target.parentNode;

//     if (event.target.classList.contains('dropdown')) {
//       dropdown.classList.toggle('dropdown--active');
//     }
//   }

//   function hideItems() {
//     const activeItems = document.querySelectorAll('.dropdown--active');

//     activeItems.forEach(item => {
//       item.classList.remove('dropdown--active');
//     });
//   }

//   function add(target) {
//     const parent = target.parentNode;
//     let value = parent.parentNode.children[1];
//     let text = parent.parentNode.children[1].innerText;

//     if (parent.classList.contains('dropdown-controls__btn-plus')) {
//       text = parseInt(text);
//       text++;
//       value.innerText = text;
//     }
//   }

//   function minus(target) {
//     const parent = target.parentNode;
//     let value = parent.parentNode.children[1];
//     let text = parent.parentNode.children[1].innerText;

//     if (parent.classList.contains('dropdown-controls__btn-minus')) {
//       if (text > 0) {
//         text = parseInt(text);
//         text--;
//         value.innerText = text;
//       }
//     }
//   }
//   // --- --- ---

//   // events
//   body.addEventListener('click', function(event) {
//     const target = event.target;

//     showItems(event);

//     add(target);
//     minus(target);
//   });

//   // --- --- ---
// });
