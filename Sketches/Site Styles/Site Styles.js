let currentStyle = 1;
const STYLE_COUNT = 2;

function incrementStyle(){
    currentStyle += 1;
    onStyleChange();
}

function decrementStyle(){
    currentStyle -= 1;
    onStyleChange();
}

function onStyleChange(){
    if(currentStyle > STYLE_COUNT){
        currentStyle = 1;
    }else if(currentStyle < 1){
        currentStyle = STYLE_COUNT;
    }

    updateStyleSheet();
}

function updateStyleSheet(){
    document.querySelector("#stylesheet").setAttribute("href", `./style${currentStyle}.css`);
}

updateStyleSheet();