function createSourceButton(url, kindOfSource){
    let styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/CSS/SourceButton.css";
    document.querySelector("head").appendChild(styleLink);
    
    let SourceButton = document.createElement("a");
    SourceButton.classList.add("SourceButton");
    SourceButton.href = url;
    SourceButton.target = "blank";
    SourceButton.innerText = `${kindOfSource} Source`;
    document.querySelector("body").append(SourceButton);
}
