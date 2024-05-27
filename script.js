const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ==""){
        alert("You must write something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let radio = document.createElement("input");
        radio.type="radio";
        radio.name = "tasks";
        li.appendChild(radio);

        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Add an event listener to the span element to remove the task when clicked
        span.addEventListener("click", function() {
            li.remove();
        });
    }

    inputBox.value="";
}

listContainer.addEventListener("click",function(e){
    let radio = e.target.querySelector("input[type='radio']");
    if(e.target.tagName === "LI"|| e.target.tagName=="INPUT"&& e.target.type==="radio"){
        let listItem;
        if(e.target.tagName==="LI"){
            listItem = e.target;

        }
        else if (e.target.tagName==="INPUT" && e.target.type==="radio"){
            listItem= e.target.closest("LI");

        }

       


       

       

        listItem.classList.toggle("checked");

        let radio = listItem.querySelector("input[type='radio']");
        if (radio){
            if (listItem.classList.contains("checked")){
                radio.checked = true;


            } else{
                radio.checked = false;
            }


            
        }
        

       
        

        
    }
    
    
},false);

