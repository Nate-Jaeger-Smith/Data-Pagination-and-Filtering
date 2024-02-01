/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
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

showPage(data, 2);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
