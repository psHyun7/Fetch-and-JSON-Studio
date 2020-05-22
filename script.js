// TODO: add code here
window.addEventListener("load", function() {
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById("container");
            for (let i=0; i < json.length; i++) {
                let template = `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>`
                container.innerHTML += template;
                let activeStatus = document.getElementsByTagName("li");
                for (let j=0; j<activeStatus.length; j++) {
                    if (activeStatus[j].innerHTML === "Active: true") {
                        activeStatus[j].style.color = "green";
                    };
                };
            };
        });
    });
});