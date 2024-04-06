let addTask=document.querySelector('#addTask');
let input=document.querySelector('#inputBox');
let list=document.querySelector('.listContainer');

addTask.addEventListener('click',function(event)
{
    if(input.value==="")
    {
        alert("you must add something!")

    }
    else{
        let li=document.createElement('li');
        li.className='task'
        li.innerHTML=input.value;
        console.log(input.value)
        list.appendChild(li);
        alert('want to add task');
        let span=document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
    }
    input.value="";
    saveData();

})

list.addEventListener('click',
function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }

},false)

function saveData()
{
    localStorage.setItem('data',list.innerHTML);
}

function showData()
{
    list.innerHTML=localStorage.getItem('data');
}

showData();
