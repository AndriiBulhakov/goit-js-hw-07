const ulRef = document.querySelector("#categories");
const liRef = [...ulRef.children];
liRef.forEach((li) => {
    console.log("Категория:", li.firstElementChild.textContent)
    const liElements = li.querySelectorAll("li")
    console.log("Количество элементов:", liElements.length)
})




