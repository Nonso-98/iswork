
// const display = document.getElementById('dispaly')

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate(){

//     try{
//         display.value = eval(display.value);
//     }
   
// catch(error){
//     display.value = "Errror"
// }

// }



 const display = document.getElementById('display'); // Fixed typo
 function appendToDisplay(input) {
    display.value += input;
 }

function clearDisplay() {
    display.value = "";
}

// function percentage() {
//     if (display.value !== "") {
//         display.value = parseFloat(display.value) / 100;
//     }
// }


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; 
    }
}





        // const display = document.getElementById('display');

        // function appendToDisplay(input) {
        //     const lastChar = display.value.slice(-1);
        //     const operators = ['+', '-', '*', '/', '%'];

        //     if (operators.includes(lastChar) && operators.includes(input)) {
        //         return; // Prevent multiple consecutive operators
        //     }

        //     display.value += input;
        // }

        // function clearDisplay() {
        //     display.value = "";
        // }

        // function percentage() {
        //     display.value = display.value.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
        //         return parseFloat(number) / 100;
        //     });
        // }

        // function calculate() {
        //     try {
        //         display.value = new Function('return ' + display.value)();
        //     } catch (error) {
        //         display.value = "Error";
        //     }
        // }
    


