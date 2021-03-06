const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const createImages = image => {
  const listItemRef = document.createElement('li')
  const imageRef = document.createElement('img')
  imageRef.setAttribute('src', image.url)
  imageRef.setAttribute('alt', image.alt)
 
  listItemRef.appendChild(imageRef)
  const ulRef = document.querySelector('#gallery')
  ulRef.appendChild(listItemRef)
  
  return ulRef
}

images.forEach(image => {
  console.log(createImages(image))
})




