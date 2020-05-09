const counterValue = document.querySelector('#value')

const decrementBtnRef = document.querySelector('button[data-action="decrement"]')

const incrementBtnRef = document.querySelector('button[data-action="increment"]')

function decrementRef() {
  return function(){
    return counterValue.textContent = counterValue.textContent - 1
  }
  
}

function incrementRef(){
  return function(){
    return counterValue.textContent++
  }
}

decrementBtnRef.addEventListener('click', decrementRef())
incrementBtnRef.addEventListener('click', incrementRef())


