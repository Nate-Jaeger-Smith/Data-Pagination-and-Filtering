const studentList = document.querySelector('.student-list');
const paginationList = document.querySelector('.link-list');
const header = document.querySelector('.header');
const itemsPerPage = 9;
let searchedForStudents = [];

//Create and insert search input
const searchHTML = `<label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                  </label>`;
header.insertAdjacentHTML('beforeend', searchHTML);

const searchBar = header.querySelector('#search');
const searchButton = header.querySelector('button');

/**
 * Displays a specified page of student data on the webpage.
 * Paginates the provided list of students based on the given page number and adds corresponding HTML elements to the DOM.
 * @param {Array} list - The list of student data to be paginated and displayed.
 * @param {number} page - The page number to be displayed.
 */
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   studentList.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const student = list[i];
         const studentCard = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${student.picture.thumbnail}" alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML('beforeend', studentCard);
      }
   }
}

/**
 * Paginates a list of students and adds corresponding buttons to the page.
 * Determines the number of buttons needed based on the length of the list.
 * @param {array} list - The list of students to be paginated.
 */
function addPagination(list){
   const numberOfButtons = Math.ceil(list.length / itemsPerPage);
   paginationList.innerHTML = "";

   for (let i = 1; i <= numberOfButtons; i++) {
      const button = `<li>
                     <button type="button">${i}</button>
                     </li>`;
      paginationList.insertAdjacentHTML('beforeend', button);
   }
   paginationList.querySelector('button').classList.add('active');
}

function searchStudents (list){
   const foundStudents= [];
   searchedForStudents = [];
   for (let i = 0; i < list.length; i++) {
      const student = list[i];
      const studentName = `${student.name.first.toLowerCase()} ${student.name.last.toLowerCase()}`;
      const searchValue = searchBar.value.toLowerCase();

      if (studentName.includes(searchValue)) {
         foundStudents.push(student);
      }
   }
   if (foundStudents.length > 0) {
      searchedForStudents = foundStudents;
      showPage(foundStudents, 1);
      addPagination(foundStudents);
   } else {
      studentList.innerHTML = `<h3>No results found</h3>`;
      paginationList.innerHTML = "";
   }
}

// Call functions
showPage(data, 1);
addPagination(data);


// Event listener for pagination buttons to update active button and display corresponding data
paginationList.addEventListener('click', (e) => {
   const target = e.target;
   if (target.tagName === 'BUTTON' && searchBar.value !== "") {
      paginationList.querySelector('.active').classList.remove('active');
      target.classList.add('active');
      showPage(searchedForStudents, target.textContent);
   }
   else if (target.tagName === 'BUTTON') {
      paginationList.querySelector('.active').classList.remove('active');
      target.classList.add('active');
      showPage(data, target.textContent);
   } 
   //Add else condition to click through pagination buttons of searched students array
});


searchBar.addEventListener('keyup', () => searchStudents(data));
searchButton.addEventListener('click', () => searchStudents(data));