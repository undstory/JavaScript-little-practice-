// !!zadanie 1

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

// !! Zadanie 2 

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

// !! zadanie3 

let weight = document.querySelector(".weight"),
    growth = document.querySelector(".growth"),
    bmi_result = document.querySelector(".bmi_result"),
    bmi_btn = document.querySelector(".bmi_btn"),
    interpretation = document.querySelector(".interpretation");



function getBMI(){

    if(growth.value !== '' & weight.value !== ''){
        weight = weight.value; 
        growth = growth.value/100; 
        let bmi = weight/(growth*growth);
        bmi = bmi.toFixed(1);
        bmi_result.innerHTML = bmi;

        if(bmi < 15){
        interpretation.innerHTML = "wygłodzenie"; 
        } else if(bmi > 15 & bmi < 17.4) {
            interpretation.innerHTML = "wychudzenie";
        } else if(bmi >= 17.5 & bmi <= 18.5) {
            interpretation.innerHTML = "niedowaga";
        } else if(bmi >= 18.6 & bmi <= 24.9) {
            interpretation.innerHTML = "wartość prawidłowa";
        } else if(bmi >= 25 & bmi <= 29.9) {
            interpretation.innerHTML = "nadwaga";
        } else if(bmi >= 30 & bmi <= 34.9) {
            interpretation.innerHTML = "I stopień otyłości";
        } else if(bmi >= 35 & bmi <= 39.9) {
            interpretation.innerHTML = "II stopień otyłości";
        } else (bmi >= 40) 
            interpretation.innerHTML = "II stopień otyłości";
        
    } else {
        alert("Wprowadziłeś nieprawidłowe dane!")
    }
} 


bmi_btn.addEventListener("click", getBMI); 



