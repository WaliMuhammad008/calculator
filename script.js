let input = document.getElementById('inputbox')
let button = document.querySelectorAll('button');


let string = "";
let calculated = false;

let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string).toString();
            input.value = string;
            calculated = true;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString().substring(0, string.length-1);
            input.value = string;
        }
        else{
            let val = e.target.innerHTML;
            if (calculated) {
                if (['+', '-', '*', '/'].includes(val)) {
                    string += val;
                } else {
                    string = val;
                }
                calculated = false;
            } else {
                string += val;
            }
            input.value = string;
        }
    }
    )
})
