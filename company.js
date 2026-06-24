let companies =
JSON.parse(localStorage.getItem("companies")) || [];

function addCompany(){

    let companyName =
        document.getElementById("companyName").value;

    let role =
        document.getElementById("role").value;

    let status =
        document.getElementById("status").value;

    if(companyName === "" || role === ""){
        alert("Fill all fields");
        return;
    }

    companies.push({
        company: companyName,
        role: role,
        status: status
    });

    localStorage.setItem(
        "companies",
        JSON.stringify(companies)
    );

    document.getElementById("companyName").value = "";
    document.getElementById("role").value = "";

    displayCompanies();
}

function displayCompanies(){

    let list =
        document.getElementById("companyList");

    list.innerHTML = "";

    companies.forEach(function(item,index){

        let li =
            document.createElement("li");

        li.textContent =
            `${item.company} - ${item.role} - ${item.status}`;

        if(item.status === "Selected"){
            li.style.borderLeft =
                "6px solid #38a169";
        }
        else if(item.status === "Rejected"){
            li.style.borderLeft =
                "6px solid #e53e3e";
        }
        else if(item.status === "Interview Scheduled"){
            li.style.borderLeft =
                "6px solid #dd6b20";
        }
        else{
            li.style.borderLeft =
                "6px solid #3182ce";
        }

        let deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function(){

            companies.splice(index,1);

            localStorage.setItem(
                "companies",
                JSON.stringify(companies)
            );

            displayCompanies();
        };

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

displayCompanies();