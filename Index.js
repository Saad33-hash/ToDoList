const input=document.getElementById("inputfield");
const addbtn=document.getElementById("addtaskbutton");
const taskes=document.getElementById("tasklist");
const total=document.getElementById("total");
const remaining=document.getElementById("remianing");
const completd=document.getElementById("completed");


//varaibles for total remaining and completd
let totalTask=0;
let remainingTask=0;
let completedTask=0;

function updateState(){
    total.innerText=`${totalTask}`;
remaining.innerText=`${remainingTask}`;
   completd.innerText=`${completedTask}`; 
}

input.addEventListener("input",function(){
    const valueofInput=input.value;
    console.log("The perosn types",valueofInput)
})

addbtn.addEventListener("click",function(){
    //checking value should not be incremented when empty
    if(input.value==""){
        return;
    }
//incrementing the value of total,remaing and completef
totalTask++;
//now remianing
remainingTask++;
//update the values of total,remaining and completed
updateState();

    //create a div when user click on add button
const recentTask=document.createElement("div");
recentTask.classList.add("recenttaskdiv");
recentTask.innerHTML=`
<div class='maintasks'>
<div class='task'>
<input class="check" type="checkbox" id="checkbtn">
<span class='spantext'>${input.value}</span>
</div>
<div class='deletediv'>
<button class='taskdelete'> X</button>
</div>
</div>
`

const checkingValue=recentTask.querySelector(".check");
console.log("value of checkbtn",checkingValue);
checkingValue.addEventListener("change",function(){
    //i want that when i click check box completed task value shuould be incremented so i use checkingvvalue.checked
    if(checkingValue.checked){
        //if box checked increment complted tas
    completedTask++;
    //decret remianing task
    remainingTask--;
   updateState();
    }
    else{
        //when user unchecked completedtaskvalue should be rest
        completedTask--;
        //when user unchecked remianing should move back to its place means reset to previous value
        remainingTask++;
       updateState();

    }
})

//logic for delete button
const deletebtn=recentTask.querySelector(".taskdelete");
deletebtn.addEventListener("click",function(){
   
    
   
    
    if(checkingValue.checked){
        completedTask--;
    }
    else{
             remainingTask--;
             if(remainingTask<0){
                remaining.innerText=0;
             }
   
    }
     totalTask--;
     recentTask.remove();
      updateState();
    
})

input.value="";
taskes.appendChild(recentTask);
})