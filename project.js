let projects = JSON.parse(localStorage.getItem("projects"))|| [];

function addProject(){
    let projectName = document.getElementById("projectName").value;
    if(projectName ===""){
        alert("Enter project name");
        return;
    }
    let status = document.getElementById("status").value;
    projects.push({
        name:projectName,
        status: status
    });
    localStorage.setItem(
        "projects",JSON.stringify(projects)
    );
    document.getElementById("projectName").value = "";
    displayProjects();
}
function displayProjects(){

    let list = document.getElementById("projectList");
    

    list.innerHTML = ""; // ✅ Clear list once

    projects.forEach(function(item,index){

        let li = document.createElement("li");

        li.textContent = `${item.name} - ${item.status}`;

        if(item.status === "Planned"){
            li.style.borderLeft = "6px solid #3182ce";
        }
        else if(item.status === "In Progress"){
            li.style.borderLeft = "6px solid #dd6b20";
        }
        else{
            li.style.borderLeft = "6px solid #38a169";
        }

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function(){

            projects.splice(index,1);

            localStorage.setItem(
                "projects",
                JSON.stringify(projects)
            );

            displayProjects();
        };

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}
displayProjects();