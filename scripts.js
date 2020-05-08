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
            wordResult.innerHTML = "Pierwsze słowo jest dłuższe od drugiego!";
        } else if(word2L < word2L){
            wordResult.innerHTML = "Pierwsze słowo jest krótsze od drugiego!";
        } else {
            wordResult.innerHTML = "Obydwa słowa są równej długości!";
        }
    } else {
        alert("Z tymi słowami jest coś nie tak, wpisz ponownie!")
    }

})
   
// !! Zadanie 6 

const btn6 = document.querySelector('.btn6');
const array6 = document.querySelector('.array6');
const result6 = document.querySelector('.result6');

btn6.addEventListener('click', function(){

    let arr =[];
    
    for(let i=0; i<10; i++){
        let num = Math.floor(Math.random()*10);
        arr.push(num);
    }

    console.log(arr);

    arr.sort(function(a, b){
        return a-b;
    })
    
    console.log(arr);
    let newArr =[];
    let x = 1;
    let counter = 0; 
    let item;  

  
    for(let i=0; i<arr.length; i++){
        
        for(let j=i; j<arr.length; j++){
            
            if(arr[i]==arr[j]){
                counter++;
            }

            if(x < counter){
                x = counter;
                item = arr[i];
                newArr.push(item);
            }
        }

        counter = 0;
       

    }

   
    array6.innerHTML = "Losowa tablica to: " + arr; 
    result6.innerHTML = "Pierwsza najpopularniejsza liczba to: " + item + ", która wystąpiła " + x + " razy.";

})

//!! Zadanie 7

const los1 = document.querySelector(".los1");
const los2 = document.querySelector(".los2");
const res7a = document.querySelector(".res7a");
const res7b = document.querySelector(".res7b");
const result7 = document.querySelector(".result7");
const howResult = document.querySelector(".howResult");

let num1; 
let num2; 

los1.addEventListener('click', function(){
    num1 = Math.floor(Math.random()*100);
    res7a.innerHTML = `Pierwsza wylosowana liczba to: ${num1}.`; 
})

los2.addEventListener('click', function(){
    num2 = Math.floor(Math.random()*10);
    res7b.innerHTML = `Druga wylosowana liczba to: ${num2}.`; 
})

howResult.addEventListener('click', function(){
    if(num1>num2) {
        if(num1%num2==0){
            result7.innerHTML = "Pierwsza liczba jest wielokrotnością drugiej.";
        } else {
            result7.innerHTML = "Pierwsza liczba nie jest wielokrotnością drugiej.";
        }
    } else if(num2>num1) {
        if(num2%num1==0){
            result7.innerHTML = "Druga liczba jest wielokrotnością pierwszej.";
        } else {
            result7.innerHTML = "Druga liczba nie jest wielokrotnością pierwszej.";
        }
    } else {
        result7.innerHTML = "Obydwie liczby są sobie równe, czyli są swoją wielokrotnością.";
    }
    
})

// !! Zadanie 8 

const btn8 = document.querySelector('.btn8'),
    input8 = document.querySelector('.input8'),
    output8 = document.querySelector('.output8'),
    result8 = document.querySelector('.result8');
let btnwhom8 = document.querySelector('.btnwhom8');
let arr8 = [];
let whom;
btn8.addEventListener('click', function(){
    for(let i=0; i<20; i++){
        let num8 = Math.floor(Math.random()*10);
        arr8.push(num8);
    }

    // arr8 = arr8.join(", ");
    output8.innerHTML = arr8; 
    return arr8; 
})

btnwhom8.addEventListener('click', function(){
    whom = parseFloat(input8.value);
    let how = 0; 
    let position = []; 
        if(arr8.includes(whom)){            
           
            for(let i=0; i<arr8.length; i++){
                if(whom === arr8[i]){
                    how+=1;
                    position.push(i); 
                }
            }
            result8.innerHTML = "Wybrana liczba to: " + whom + " wystepuje ona w tablicy " + how + " raz/y, na pozycji: " + position; 
        } else {
            result8.innerHTML = "Wybrana liczba nie znajduje się w tej tablicy!"; 
        }
})

//!! Zadanie 9
const btn9 = document.querySelector('.btn9'),
    arr9 = document.querySelector('.arr9'),
    res9 = document.querySelector('.res9'),
    check9 = document.querySelector('.check9'),
    input9 = document.querySelector('.input9');

    let array9 = [];

    btn9.addEventListener('click', function(){
        for(let i=0; i<20; i++){
            let num9 = Math.floor(Math.random()*100);
            array9.push(num9);
        }
        arr9.innerHTML = array9; 
        
    })

    check9.addEventListener('click', function(){
        let numeroN = parseFloat(input9.value);
        newArray9=[];
        if(numeroN !== 0 && input9.value !== ""){
            for(let i=0; i<array9.length; i++){
                if(array9[i]%numeroN === 0){
                    newArray9.push(array9[i]);
                }
               
            }
        } else {
            alert("Och, daj spokój, wpisz właściwą wartość..");
        }
       
        console.log(newArray9);
        res9.innerHTML = newArray9.length;
    })

    // !! Zadanie 12 

    const hugeContainer = document.querySelector('.hugeContainer');
    let smallContainer = document.querySelectorAll('.smallContainer'); 

        smallContainer.forEach(function(elem){
            elem.addEventListener('click', function(){
                if(elem.classList.contains("red")){
                    hugeContainer.classList.remove("yellow", "ocean", "bottle", "green");
                    hugeContainer.classList.add("red");
                }
                if(elem.classList.contains("yellow")){
                    hugeContainer.classList.remove("red", "ocean", "bottle", "green");
                    hugeContainer.classList.add("yellow");
                }

                if(elem.classList.contains("ocean")){
                    hugeContainer.classList.remove("red", "yellow", "bottle", "green");
                    hugeContainer.classList.add("ocean");
                }

                if(elem.classList.contains("bottle")){
                    hugeContainer.classList.remove("red", "ocean", "yellow", "green");
                    hugeContainer.classList.add("bottle");
                }

                if(elem.classList.contains("green")){
                    hugeContainer.classList.remove("red", "ocean", "bottle", "yellow");
                    hugeContainer.classList.add("green");
                }
            })
        })
      