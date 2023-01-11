class Books {
  constructor() {
    this.BookList = {};
    this.DisplayBooks = document.querySelector('.collection');
    this.NewTitle = document.querySelector('#title');
    this.NewAuthor = document.querySelector('#author');
    this.SaveBooks = localStorage.getItem('BookList');
    this.AddBook = document.querySelector('#btn');
    this.ErrorChecker = document.querySelector('.checker');
    this.DisplayColor = document.querySelector('.Display');
    (this.color = ['red', 'blue', 'green']), ['orange', 'black', 'purple'];
    this.StoreBooks = [];
    this.DecideOnDisplay();
  }

  ClearFields = () => {
    this.NewTitle.value = '';
    this.NewAuthor.value = '';
  };

  Validate() {
    if (this.NewTitle.value !== '' && this.NewAuthor.value !== '') {
      this.ErrorChecker.textContent = '';
      return true;
    }
  }

  DisplayAllBooks = () => {
    this.DisplayBooks.innerHTML = '';
    this.HoldBooks = JSON.parse(localStorage.getItem('BookList'));
    if (this.HoldBooks != null) {
      this.StoreBooks = this.HoldBooks;
      this.HoldBooks.forEach((Books, index) => {
        this.DisplayBooks.innerHTML += `
         <tr class="Display" style="background:+ color[i][j] +;">
         <td><span>"</span>${Books.Title}<span>" by </span>${Books.Author}</td>
         <td><button class="remove" id="${index}">Remove</button></td>
         </tr>`;
      });
    }
  };

  DecideOnDisplay = () => {
    if (this.DisplayBooks.innerHTML === '') {
      this.HoldBooks = JSON.parse(localStorage.getItem('BookList'));
      this.StoreBooks = this.HoldBooks;
      this.HoldBooks.forEach((Books, index) => {
        this.DisplayBooks.innerHTML += `
         <tr class="Display">
         <td><span>"</span>${Books.Title}<span>" by </span>${Books.Author}</td>
         <td><button class="remove" id="${index}">Remove</button></td>
         </tr>`;
      });
    } else {
      this.DisplayAllBooks();
    }
  };

  AddNewBook = () => {
    this.AddBook.addEventListener('click', () => {
      console.log('clicked');
      if (this.SaveBooks != null) {
        [];
      }
      if (this.Validate()) {
        this.BookList = {
          Title: this.NewTitle.value,
          Author: this.NewAuthor.value,
        };
        this.StoreBooks.push(this.BookList);
        localStorage.setItem('BookList', JSON.stringify(this.StoreBooks));
        this.DisplayAllBooks();
        this.ClearFields();
      } else {
        this.ErrorChecker.textContent = 'Field must contain data!';
        this.ErrorChecker.style.color = 'red';
      }
    });
  };

  RemoveBooks = () => {
    if (document.body.contains(document.querySelector('.remove'))) {
      document.querySelectorAll('.remove').forEach((rm) => {
        rm.addEventListener('click', (event) => {
          const Findid = Number(event.target.id);
          const DeleteBook = this.StoreBooks.filter((Book, index) => {
            if (index !== Findid) {
              return Book;
            }
          });
          localStorage.setItem('BookList', JSON.stringify(DeleteBook));
          this.DecideOnDisplay();
          window.location.reload();
        });
      });
    }
  };
}
const books = new Books();
books.DisplayAllBooks();
books.AddNewBook();
books.RemoveBooks();
