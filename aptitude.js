let aptitudes =
JSON.parse(localStorage.getItem("aptitudes")) || [];

function addAptitude(){

    let topic =
    document.getElementById("topic").value;

    let questions =
    document.getElementById("questions").value;

    if(topic === "" || questions === ""){
        alert("Fill all fields");
        return;
    }

    aptitudes.push({
        topic: topic,
        questions: questions
    });

    localStorage.setItem(
        "aptitudes",
        JSON.stringify(aptitudes)
    );

    document.getElementById("topic").value = "";
    document.getElementById("questions").value = "";

    displayAptitude();
}

function displayAptitude(){

    let list =
    document.getElementById("aptitudeList");

    list.innerHTML = "";

    aptitudes.forEach(function(item,index){

        let li =
        document.createElement("li");

        li.textContent =
        `${item.topic} - ${item.questions} Questions`;

        let deleteBtn =
        document.createElement("button");

        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function(){

            aptitudes.splice(index,1);

            localStorage.setItem(
                "aptitudes",
                JSON.stringify(aptitudes)
            );

            displayAptitude();
        };

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

displayAptitude();