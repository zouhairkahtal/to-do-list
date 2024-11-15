let addToDoListBTN = document.getElementById("add");

let todocontainer = document.getElementById("todocontainer");

let input = document.getElementById("input");

addToDoListBTN.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = input.value;
  todocontainer.appendChild(paragraph);
  input.value=''
  paragraph.addEventListener('click',()=>{
    paragraph.style.textDecoration = "line-through"
  })
  paragraph.addEventListener('dblclick',()=>{
    paragraph.style.display='none'
  })
});
