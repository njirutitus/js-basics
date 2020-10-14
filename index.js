// main javascript file

console.log("Javascript file loaded");

function howMany(selectObject){
    console.log(selectObject.tagName);
    let numberSelected = 0;
    for( let i = 0; i < selectObject.length; i++){
        if(selectObject.options[i].selected){
            numberSelected++;
        }
    }

    return numberSelected;
}

let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    result = document.getElementById("numberSelected");

    result.innerHTML = "Number of options selected: " + howMany(document.selectForm.musicTypes);
});

