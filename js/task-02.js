// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('#ingredients')

const createListIngredients = ingredient => {
  const listRef = document.createElement('li')
  
  ulIngredients.appendChild(listRef)
  listRef.textContent = ingredient
  return listRef
}

ingredients.forEach(ingredient =>  console.log(createListIngredients(ingredient)))



// const ulIngredients = document.querySelector('#ingredients')
// ulIngredients.appendChild(listRef)
// console.log(ulIngredients)