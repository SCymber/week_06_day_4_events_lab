document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})



const handleFormSubmit = function () {

  event.preventDefault();

  const newListItem = document.createElement('li');
  // const title = document.createElement('h2');
  newListItem.textContent = event.target.title.value
  // newListItem.appendChild(title)


  const newListItemTwo = document.createElement('li');
  // const author = document.createElement('h3')
  newListItemTwo.textContent = event.target.author.value
  // newListItemTwo.appendChild(author)

  const newListItemThree = document.createElement('li');
  // const author = document.createElement('h3')
  newListItemThree.textContent = event.target.category.value
  // newListItemTwo.appendChild(author)






  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
  list.appendChild(newListItemTwo);
  list.appendChild(newListItemThree);
}
