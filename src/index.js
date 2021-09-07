
// grab element from DOM
// submit event listenter on the form itself 

const form = document.querySelector("#create-task-form")
const taskUL = document.querySelector("#tasks")
// console.log(form)


// add Event listener

form.addEventListener('submit', gatherFormInfo)


// get text from submission 

function gatherFormInfo(e) {
  e.preventDefault()
  const todoDescription = e.target.task.value;
  // console.log(e.target.task.value);

// create <li> element for text 

createTodoLi(todoDescription)

}

function createTodoLi(todo) {
  const li = document.createElement("li")
  li.textContent = todo
  const btn = document.createElement('button')
  btn.textContent = 'X'

  btn.addEventListener('click', deleteTask)


  li.append(btn)
taskUL.append(li)
}
 


// delete a todo


function deleteTask(e) {
  // e.target = the button (we do not want to just remove the button)
  // e.target.parentElement = the entire li

  const taskLi = e.target.parentElement
  taskLi.remove()
}



// const del = document.querySelector("")
// console.log(del)

// li.addEventListener('click', removeLi)

// function removeLi(){
//   li.remove
// }




// recognize text submit event 
// get text from submission 
// create element for text 
// add text from submission 






// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
