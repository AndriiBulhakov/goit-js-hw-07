// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
const inputRef = document.querySelector('#validation-input')
const lengthData = inputRef.getAttribute('data-length')


console.dir(inputRef)
inputRef.addEventListener('change', event => {
  const eventTag = event.target.value.length
  if(Number(lengthData) === eventTag){
    inputRef.classList.add('valid')
  }else{
    inputRef.classList.add('invalid')
  }
})


 
  