// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const inputRef = document.querySelector('#name-input')

const headingRef = document.querySelector('#name-output')

inputRef.addEventListener('input', event => {
   console.log(event.target.value);
  if(event.target.value === ''){
    return headingRef.textContent = 'незнакомец'
  }else{
    return headingRef.textContent = event.target.value
  }
})

