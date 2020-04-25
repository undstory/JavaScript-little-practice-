(function(){
    let number = document.querySelector('.number'); 
const btn = document.querySelector('.get'); 
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');

const arr = [];

function getNumber(){

    if(number.value !== '') {
        let numero = number.value;
        arr.push(numero);
        number.value = '';

    if(arr.length == 5){

        this.disabled = true;
        output1.append(arr);
        output2.append(arr.reverse());
        output3.append(arr.filter(value => value > 20));

   
    } 
    } else {
        alert('Wpisz liczbę!');
    }
};

btn.addEventListener("click", getNumber);
})()


    let result = document.querySelector(".box-result");
    const minus = document.querySelector(".box-minus");
    const plus = document.querySelector(".box-plus");

    let counter = 0; 
    

    plus.addEventListener("click", function(){
        counter +=1;
        result.innerHTML = counter;
    })

    minus.addEventListener("click", function(){
        counter -=1;
        result.innerHTML = counter; 
    })






