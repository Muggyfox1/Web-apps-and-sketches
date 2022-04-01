let styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "/CSS/HomeButton.css";
document.querySelector("head").appendChild(styleLink);

let HomeButton = document.createElement("a");
HomeButton.classList.add("HomeButton");
HomeButton.href = "/index.html";
HomeButton.innerText = "HomePage";
document.querySelector("body").append(HomeButton);