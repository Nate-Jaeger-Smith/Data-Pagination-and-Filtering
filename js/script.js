const paginationList = document.querySelector('.link-list');
const itemsPerPage = 9;

function showPage (list, page){
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = "";

   for ( let i = 0; i < list.length; i++ ) {
      let student = list[i];
      if ( i >= startIndex && i < endIndex ) {
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
   document.querySelector('button').classList.add('active');
}



// Call functions
showPage(data, 1);
addPagination(data);