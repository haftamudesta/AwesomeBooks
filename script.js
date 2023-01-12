class Books {
  constructor() {
    this.BookList = {};
    this.DisplayBooks = document.querySelector('.collection');
    this.NewTitle = document.querySelector('#title');
    this.NewAuthor = document.querySelector('#author');
    this.SaveBooks = localStorage.getItem('BookList');
    this.AddBook = document.querySelector('#btn');
    this.ErrorChecker = document.querySelector('.checker');
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
         <tr class="Display" >
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
      } else {
        this.ErrorChecker.textContent = 'Field must contain data!';
        this.ErrorChecker.style.color = 'red';
      }
      this.NewTitle.value = '';
      this.NewAuthor.value = '';
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
            window.location.reload();
          });
          localStorage.setItem('BookList', JSON.stringify(DeleteBook));
          this.DecideOnDisplay();
        });
      });
    }
  };
}
const books = new Books();
//books.DisplayAllBooks();
//books.AddNewBook();
//books.RemoveBooks();

const fullTime = document.querySelector('.time');
const dates = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let monthValue;
  switch (month) {
    case 0:
      monthValue = 'January';
      break;
    case 1:
      monthValue = 'February';
      break;
    case 2:
      monthValue = 'March';
      break;
    case 3:
      monthValue = 'April';
      break;
    case 4:
      monthValue = 'May';
      break;
    case 5:
      monthValue = 'June';
      break;
    case 6:
      monthValue = 'July';
      break;
    case 7:
      monthValue = 'August';
      break;
    case 9:
      monthValue = 'September';
      break;
    case 10:
      monthValue = 'October';
      break;
    case 11:
      monthValue = 'November';
      break;
    case 12:
      monthValue = 'December';
      break;
    default:
      break;
  }
  fullTime.textContent = `${monthValue} ${date}th ${year},${hour}:${minute}:${second}`;
};

const DisplayBooks = document.querySelector('.List-Items');
const AddBooks = document.querySelector('.add-books');
const Contact = document.querySelector('.Contact');
const List = document.querySelector('#List');
const Add = document.querySelector('#Add');
const Link = document.querySelector('#Link');
const DisplayAllBooks = () => {
  List.addEventListener('click', () => {
    DisplayBooks.classList.add('active');
    List.style.color = 'rgb(255, 0, 0)';
    Link.style.color = 'black';
    Add.style.color = 'black';
    Contact.classList.remove('active');
    AddBooks.classList.remove('active');
    DisplayBooks.style.display = 'block';
    books.RemoveBooks();
  });
};

const AddNewBook = () => {
  Add.addEventListener('click', () => {
    AddBooks.classList.add('active');
    Add.style.color = 'rgb(255, 0, 0)';
    Link.style.color = 'black';
    List.style.color = 'black';
    Contact.classList.remove('active');
    DisplayBooks.classList.remove('active');
    DisplayBooks.style.display = 'none';
    books.AddNewBook();
  });
};
const ShowContactDetails = () => {
  Link.addEventListener('click', () => {
    Contact.classList.toggle('active');
    Link.style.color = 'rgb(255, 0, 0)';
    Add.style.color = 'black';
    List.style.color = 'black';
    AddBooks.classList.remove('active');
    DisplayBooks.classList.remove('active');
    DisplayBooks.style.display = 'none';
  });
};
DisplayAllBooks();
AddNewBook();
ShowContactDetails();
dates();
