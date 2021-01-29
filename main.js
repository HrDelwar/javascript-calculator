
//get displaying result field id
const displayId = document.getElementById('textBox');

// display function 
function display(num) {
    let result = "";
    displayId.value += num;
}
// result
function result() {
    const result = eval(displayId.value);
    displayId.value = result;
}
//clear 
function clearAll(){
    displayId.value = '';
}
// backspace 
function backspace(){
    const inputValue = displayId.value;
    displayId.value = inputValue.substr(0, inputValue.length -1);
}