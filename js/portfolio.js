let projectsNodeList = document.querySelectorAll(".projects");
let descriptionsNodeList = document.querySelectorAll(".description");

for (let i = 0; i < projectsNodeList.length; i++){
    projectsNodeList[i].addEventListener("mouseenter", function() {
        for (let j = 0; j < descriptionsNodeList.length; j++) {
            descriptionsNodeList[j].classList.add("hidden");
        }
        descriptionsNodeList[i].classList.remove("hidden");
        descriptionsNodeList[i].classList.add("active");
        console.log("works", i,);
    });
}