// selecting elements
const input = document.getElementById('taskInput')
const addBtn = document.getElementById('addbtn')
const taskList = document.getElementById('taskList')

// Add Task on button list
addBtn.addEventListener('click',() => {
   const task = input.value.trim();
   if(task === '') return;
   
   // create list item
   const li = document.createElement('li');
   li.textContent = task;
   li.setAttribute('data-status','pending');
   li.style.cursor='pointer';
   
   // toggle done/undone
   li.addEventListener('click',() => {
      const status = li.getAttribute('data-status');
      if(status === 'pending'){
         li.classList.add('done');
         li.setAttribute('data-status','done');
      } else {
        li.classList.remove('done');
        li.setAttribute('data-status','pending')
      }   
   });
   const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'X';
   deleteBtn.style.marginLeft = '10px';
   deleteBtn.setAttribute('title','Delete Task');
   deleteBtn.addEventListener('click',(e) => {
      e.stopPropagation();
      const parentLi = deleteBtn.parentElement;
      taskList.removeChild(parentLi);
   });
   li.append(deleteBtn);
   taskList.appendChild(li);
   input.value = '';
});
