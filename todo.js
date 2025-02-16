var list = document.querySelector("#list")
var input = document.querySelector("#input-box")

function addtask(){
    if(input.value ===''){
        alert("Enter Valid Task!");
    }else{
        let li=document.createElement("li")
        li.innerHTML=input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }

    input.value='';
    savetask();
}
showtask();


list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savetask();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savetask();
    }

})
function savetask(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data")
}
