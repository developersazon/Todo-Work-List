 const inputBox = document.getElementById('input-box');
 const listContainer = document.getElementById('list-container');


 function addTask() {

     if (inputBox.value === '') {

        alert('Please write someting about your finished Task !');

     }else {

        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //add new element for close the text
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

     }
     inputBox.value = '';
     saveData();
 }


 listContainer.addEventListener("click", function(e){
   
     if(e.target.tagName === "LI"){

       e.target.classList.toggle("checked");
       saveData();
     }
     else if(e.target.tagName === "SPAN"){

       e.target.parentElement.remove();
       saveData();
     }


 }, false);

//store browser data function
 function saveData() {

    localStorage.setItem("data", listContainer.innerHTML);
 }

//display browser data function
 function showTask() {

    listContainer.innerHTML = localStorage.getItem("data");
 } showTask();
