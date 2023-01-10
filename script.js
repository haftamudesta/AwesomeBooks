let bookList = {};
const displayBooks = document.querySelector('.all-books');
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const addBook = document.querySelector('#btn');
let StoreBooks = [];
const ClearFields = () => {
  newTitle.value = '';
  newAuthor.value = '';
};
const DisplayAllBooks = () => {
  ClearFields();
  displayBooks.innerHTML = '';
  StoreBooks = JSON.parse(localStorage.getItem('bookList')) || [];
  StoreBooks.forEach((Books, index) => {
    displayBooks.innerHTML += `
        <div class="bookList">
        <h1 class="titles">${Books.Title}</h1>
        <h2 class="authors">${Books.Author}</h2>  
        <button class="remove" id="${index}" onclick="RemoveBooks(event)">Remove</button>
        <br>
        <br>
        <hr class="rule"> 
        <br>
        </div>`;
  });
};

const saveBooks = () => {
  addBook.addEventListener('click', () => {
    if (newTitle.value === '' || newAuthor.value === '') return;
    bookList = {
      Title: newTitle.value,
      Author: newAuthor.value,
    };
    StoreBooks.push(bookList);
    localStorage.setItem('bookList', JSON.stringify(StoreBooks));
    DisplayAllBooks();
    ClearFields();
  });
};

const RemoveBooks = (event) => {
  const Findid = event.target.id;
  const DeleteBook = StoreBooks.filter((Book, index) => {
    if (index != Findid) {
      return Book;
    }
  });
  localStorage.setItem('bookList', JSON.stringify(DeleteBook));
  DisplayAllBooks();
};

DisplayAllBooks();
saveBooks();
