let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");


button.addEventListener("click",function(){
    let items = document.createElement("li");
    items.innerText = input.value;
    ul.appendChild(items);
    input.value = "";

    let delbtn =  document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    items.appendChild(delbtn);
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.dir("deleted");
    }
})

