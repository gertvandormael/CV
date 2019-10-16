let projectsNodeList = document.querySelectorAll(".projects");
let descriptionsNodeList = document.querySelectorAll(".description");
let descriptionInfo = document.getElementsByClassName("description-info");
console.log(descriptionInfo[0]);

for (let i = 0; i < projectsNodeList.length; i++){
    projectsNodeList[i].addEventListener("click", function() {
        for (let j = 0; j < descriptionsNodeList.length; j++) {
            descriptionsNodeList[j].classList.add("hidden");
            projectsNodeList[j].classList.remove("focus");
        }
        descriptionsNodeList[i].classList.remove("hidden");
        descriptionsNodeList[i].classList.add("active");
        projectsNodeList[i].classList.add("focus");
        descriptionInfo[0].classList.add("hidden");
    });
}