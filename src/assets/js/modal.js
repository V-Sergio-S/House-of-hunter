
let card = document.querySelectorAll("[data-card]"),
    cost = document.querySelectorAll("[data-cost]"),
    trigger = document.querySelectorAll('[data-mod]'),
    btnClose = document.querySelectorAll('[data-close]'),
    page = document.getElementById('page'),
    body = document.body,
    scrollwindow = calcScroll()


card.forEach( element => {
  element.addEventListener('click', event => {
    event.stopPropagation
    let $this = event.currentTarget;

    $this.offsetParent.offsetParent.firstChild.nextElementSibling.classList.add('fauna__explanation--animation')
    setTimeout(() => $this.offsetParent.offsetParent.firstChild.nextElementSibling.firstChild.nextElementSibling.classList.add('reveal', 'fade-bottom', 'active'), 800);
  })
});

cost.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation
    let $that = event.currentTarget;

    $that.parentNode.classList.add('reveal','exit-bottom', 'active')

    $that.parentNode.parentNode.classList.add('reveal','exit-bottom', 'no-active')
    $that.parentNode.parentNode.classList.add('fauna__explanation--no-animation')
    setTimeout(() => $that.parentNode.parentNode.classList.remove('reveal','exit-bottom', 'no-active', 'fauna__explanation--no-animation', 'fauna__explanation--animation'), 600);

    setTimeout(() => $that.parentNode.classList.remove( 'reveal', 'fade-bottom', 'active', 'reveal', 'exit-bottom', 'active'), 700);
  })
})


function calcScroll () {
  let div = document.createElement('div')
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.overflowY = 'scroll'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()
  return scrollWidth

}

function showWindow (element) {

    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.setAttribute('data-close', 'privacy')
    page.appendChild(mask)
    mask.addEventListener('click', () => {
        hiddenWindow (element)
    } );

    element.classList.add('is-active')
    body.classList.add('no-scroll')
    body.style.marginRight = `${scrollwindow}px`

}

function hiddenWindow (element) {

    document.querySelector('.page__mask').remove();
    element.classList.remove('is-active')
    body.classList.remove('no-scroll');
    body.style.marginRight = `0px`

}

trigger.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let modalId = event.currentTarget.getAttribute('data-mod'),
            modal = document.getElementById(modalId);

        if (body.classList.contains('no-scroll')) {

            let currentModal = event.currentTarget.closest('.closest');
            hiddenWindow(currentModal)
            showWindow (modal)
        } else {
            showWindow (modal)
        }

    });
});


btnClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.closest');
        hiddenWindow (currentModal)
    });
});

