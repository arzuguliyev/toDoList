
function addNewTask()
{
    let newTaskValue = document.getElementById('newTaskValue').value;
    // todoList.push(newTaskValue);
    // displayName()
    let newLi =  document.createElement('LI'),
        addIcon = document.createElement('I'),
        deleteIcon = document.createElement('I'),
        textNode = document.createTextNode(newTaskValue);
      
        addIcon.className = 'fas fa-check-circle mr-3';
        addIcon.onclick = function ()
        {
            this.style.color = 'green';
            this.parentElement.style.textDecoration = 'line-through';
        }
        deleteIcon.className = 'fas fa-trash-alt ml-3';
        deleteIcon.onclick = function ()
        {
            let parentEelementValue = this.parentElement;
            parentEelementValue.parentNode.removeChild(parentEelementValue);
        }
        
        newLi.appendChild(addIcon);
        newLi.appendChild(textNode);
        newLi.appendChild(deleteIcon);
        document.getElementById('myList').appendChild(newLi);
        document.getElementById('newTaskValue').value = '';
} 

