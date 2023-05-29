<p id='greeting'>'Hello, world'</p>
let myParagraph=document.getElementById('greeting')
myParagraph.textContent='Hello, universe !'


let newItem=document.createElement('li')
newItem.textContent='This is the new item'
let myList=document.querySelector('ul')
myList.appendChild(newItem);