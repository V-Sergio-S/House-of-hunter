let minus = document.querySelectorAll('[data-minus]'),
    plus = document.querySelectorAll('[data-plus]')


      for (let i = 0; i < minus.length; i++) {
        const element = minus[i];
      
        element.addEventListener('click', (e) => {
      
          e.currentTarget.nextElementSibling.stepDown()
        })
      }
      
      for (let j = 0; j < plus.length; j++) {
        const item = plus[j];
        item.addEventListener('click', (e) => {
      
          e.currentTarget.previousElementSibling.stepUp()
    
        })
      }





