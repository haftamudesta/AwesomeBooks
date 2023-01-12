const DisplayBooks = document.querySelector('.List-Items');
const AddBooks = document.querySelector('.add-books');
const Contact = document.querySelector('.Contact');
const List = document.querySelector('#List');
const Add = document.querySelector('#Add');
const Link = document.querySelector('#Link');
const fullTime = document.querySelector('.time');

const DisplayAllBooks = () => {
  List.addEventListener('click', () => {
    DisplayBooks.classList.add('active');
    List.style.color = 'rgb(255, 0, 0)';
    Link.style.color = 'black';
    Add.style.color = 'black';
    Contact.classList.remove('active');
    AddBooks.classList.remove('active');
    DisplayBooks.style.display = 'block';
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
DisplayAllBooks();
AddNewBook();
ShowContactDetails();
dates();
