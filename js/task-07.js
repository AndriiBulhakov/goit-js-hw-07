// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control')
// headingRef.style.fontSize = '45px'

inputRef.addEventListener('input',updateValue)

function updateValue(event){
  const headingRef = document.querySelector('#text') 
  headingRef.style.fontSize = `${event.target.value}px`
}





  