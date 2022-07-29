addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        
        const task=input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }

        const task_ele=document.createElement("div");
        task_ele.classList.add("task");
    //     <div class="task">
    //     <div class="content">
    //         <input readonly type="text" class="text" value="My shiny task.">
    //     </div>
    //     <div class="action">
    //         <button class="edit">Edit</button>
    //         <button class="delete">Delete</button>
    //     </div>
    // </div>
        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        task_ele.appendChild(task_content_el);

        const task_input_ele=document.createElement("input")
        task_input_ele.classList.add("text");
        task_input_ele.type="text";
        task_input_ele.value=task;
        task_input_ele.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_ele);

        const task_action_ele=document.createElement("div");
        task_action_ele.classList.add("action");
        
        const task_edit_ele=document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML="Edit";

        const task_delete_ele=document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML="Delete";

       
        task_action_ele.appendChild(task_edit_ele);
        task_action_ele.appendChild(task_delete_ele);

        task_ele.appendChild(task_content_el);
        task_ele.appendChild(task_action_ele);

        task_edit_ele.addEventListener('click',()=>{
            if(task_edit_ele.innerHTML.toLowerCase() == "edit"){
                task_input_ele.removeAttribute("readonly");
                task_input_ele.focus();
                task_edit_ele.innerHTML="Save";
            }
            else{
                task_input_ele.setAttribute("readonly","readonly");
                task_edit_ele.innerHTML="Edit";
            }
        })
        task_delete_ele.addEventListener('click',()=>{
           list_el.removeChild(task_ele);
        })



        list_el.appendChild(task_ele);
        
        input.value=null;
        
    });
});

