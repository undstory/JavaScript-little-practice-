// !!zadanie 1

(function(){
    let number = document.querySelector('.number'); 
const btn = document.querySelector('.get'); 
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.querySelector('.output4');
const output5 = document.querySelector('.output5');

const arr = [];

function getNumber(){

    if(number.value !== '') {
        let numero = parseFloat(number.value);
        arr.push(numero);
        number.value = '';
        number.focus();
    if(arr.length == 5){

        this.disabled = true;
        output1.append(arr);
        output2.append(arr.reverse());
        output3.append(arr.filter(value => value > 20));
        output4.append(arr.reduce((a, b) => a + b));
        output5.append(Math.max(...arr));
        // inny zapis: (Math.max.apply(Math, arr));
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
    interpretation = document.querySelector(".interpretation"),
    bmi_btn_new = document.querySelector(".bmi_btn_new");

function getBMI(){

    if(growth.value !== '' & growth.value > 0 & weight.value !== '' & weight.value > 0){
        getweight = parseFloat(weight.value); 
        getgrowth = parseFloat(growth.value/100);
        let bmi = getweight/(getgrowth*getgrowth);
        bmi = bmi.toFixed(1);
        bmi_result.innerHTML = bmi;
       

        if(bmi < 18){
        interpretation.innerHTML = "niedowaga"; 
        } else if(bmi > 18 && bmi < 25) {
            interpretation.innerHTML = "wartość prawidłowa";
        } else if( bmi >= 25) {
            interpretation.innerHTML = "nadwaga";
        }         
        
    } else {
        alert("Wprowadziłeś nieprawidłowe dane!")
    }    
} 

bmi_btn.addEventListener("click", getBMI); 

bmi_btn_new.addEventListener("click", function(){
    growth.value = "";
    weight.value = "";
    bmi_result.value = "";
    interpretation.value = ""; 
})

//!!Zadanie 4

let dateOfBirth = document.querySelector(".date_of_birth");
const timeBtn = document.querySelector(".time_btn");
const timeResult = document.querySelector(".time_result");

function getDiffTime(){

    if(dateOfBirth.value !== ""){

        let date1 = dateOfBirth.value;
        let dateA = new Date(date1); 

        let now = new Date();

        const oneDay = 24*60*60*1000;

        let difference = Math.floor((now.getTime()-dateA.getTime())/(oneDay));

        timeResult.innerHTML = difference; 
    } else {
    alert("Jesteś nieuważny. Wpisz poprawną datę!");
    }
}

    timeBtn.addEventListener('click', getDiffTime);



//!! Zadanie 5 

let word1 = document.querySelector(".word1");
let word2 = document.querySelector(".word2");
const wordBtn = document.querySelector(".word_btn");
const wordResult = document.querySelector(".word_result");

wordBtn.addEventListener('click', function(){

    if (word1.value !== "" & word2.value !== ""){

        word1 = word1.value; 
        let word1L = word1.length;
        word2 = word2.value;
        let word2L = word2.length;
    
        console.log(word1L);
        console.log(word2L);
    
        if(word1L > word2L){
            wordResult.innerHTML = "Pierwsze słowo jest większe od drugiego!";
        } else if(word2L < word2L){
            wordResult.innerHTML = "Pierwsze słowo jest mniejsze od drugiego!";
        } else {
            wordResult.innerHTML = "Obydwa słowa są równej długości!";
        }
    } else {
        alert("Z tymi słowami jest coś nie tak, wpisz ponownie!")
    }

})
   
    
    

// let word1Length = word1.value; 
// let word2Length = word2.value;
