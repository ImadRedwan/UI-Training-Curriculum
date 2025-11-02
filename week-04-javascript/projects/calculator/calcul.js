const displayInput = document.getElementById("input");



const clear = document.getElementById("clrBtn");
    clear.addEventListener("click", () => {
    console.log("clearDisplay");
    displayInput.value = "";
});

const buttons = document.getElementsByClassName("btn");
    for (let idx = 0; idx < buttons.length; idx++) {
    const btn = buttons[idx];
    btn.addEventListener("click", (ev) => {
        displayInput.value += ev.target?.innerText;
    }); 
};
// function addEventListener(kind, fn) {
//     if (kind == "click") {
//         fn(dsklafjkodsalf: PointerEvent);
//     }
// }

const operator = document.getElementsByClassName("rightbtn");
    for (let index = 0; index < operator.length; index++) {
        const rightbtn = operator[index];
        rightbtn.addEventListener("click" , (op) => {
            displayInput.value += op.target?.innerText;
        });
};

const result = document.getElementById("sum");
result.addEventListener("click" , () => {
    displayInput.value = eval(displayInput.value);
});

const percentage = document.getElementById("percentage");
percentage.addEventListener("click" , () => {
    displayInput.value =Number(displayInput.value)/100;
});

const minusornot = document.getElementById("minus");
minusornot.addEventListener("click" , () => {
    displayInput.value+= "-";
    if (displayInput.value != "" && displayInput.value !="0"){
        if (displayInput.value[0] == "-") {
            displayInput.value =displayInput.value.slice(1);
        }
    }
});


let i = document.getElementsByClassName("rightbtn");
function ii(){
if( i == 0){
    return;
}};
















