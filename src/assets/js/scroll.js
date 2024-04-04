let trigger = document.querySelectorAll('[data-trigger]');

function scrollMenu (e) {

  e.preventDefault();

  let scrollId = e.currentTarget.getAttribute('data-trigger');
  let scrollItem = document.getElementById(scrollId);
  scrollItem.scrollIntoView({behavior: 'smooth'});

}


trigger.forEach(menu => {
  menu.addEventListener('click', event => {

    scrollMenu (event)
} );
});