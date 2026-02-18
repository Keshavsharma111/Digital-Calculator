
let screen = document.getElementById('screen');
function press(val) {
    screen.value += val;
}
function clearAll() {
    screen.value = "";
}
function answer() {
    let expression = screen.value;
    
    try {
        let result = eval(expression);
        screen.value = result;
    } catch (err) {
        alert("Invalid Input!");
        screen.value = "";
    }
}