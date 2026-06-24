let problems = JSON.parse(localStorage.getItem("problems")) || [];

function addproblem() {

    let problem = document.getElementById("problem").value;

    if (problem === "") {
        alert("Please enter a problem name");
        return;
    }

    let difficulty = document.getElementById("difficulty").value;

    problems.push({
        problem: problem,
        difficulty: difficulty
    });

    localStorage.setItem(
        "problems",
        JSON.stringify(problems)
    );

    document.getElementById("problem").value = "";

    displayProblems();
}

function displayProblems() {

    let list = document.getElementById("problemList");

    list.innerHTML = "";

    problems.forEach(function(item, index) {

        let li = document.createElement("li");

        li.textContent = `${item.problem} - ${item.difficulty}`;

        if (item.difficulty === "Easy") {
            li.style.borderLeft = "6px solid #38a169";
        }
        else if (item.difficulty === "Medium") {
            li.style.borderLeft = "6px solid #dd6b20";
        }
        else {
            li.style.borderLeft = "6px solid #e53e3e";
        }

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function() {

            problems.splice(index, 1);

            localStorage.setItem(
                "problems",
                JSON.stringify(problems)
            );

            displayProblems();
        };

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

displayProblems();