const boxes=document.querySelectorAll(".box");
// console.log(box)
const body=document.querySelector("body");

boxes.forEach(
    function(box)
    {
        box.addEventListener('click',function(e)
        {
            console.log(e);
            console.log(e.target.id);
            if(e.target.id==="orange")
            {
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="white")
            {
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="purple")
            {
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="blue")
            {
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="violet")
            {
                body.style.backgroundColor=e.target.id;
            }
        })
    }
)


