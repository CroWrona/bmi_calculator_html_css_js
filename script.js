const text_BMI_ = document.getElementById('text_BMI_');
const text_BODY_ = document.getElementById('text_BODY_');
const text_INFO_ = document.getElementById('text_INFO_');
const text_KCAL_ = document.getElementById('text_KCAL_');
const hr_bmi = document.getElementById('color_bmi');
const Gender_ = document.getElementById('gender');

function BMI_Calculator(){
  var age = document.getElementById('age').value;
  var kg = document.getElementById('kg').value;
  var height = document.getElementById('height').value;

  if(age > 0 && kg > 0 && height > 0){
    BMI_Calculator_TEXT(kg,height);
    calculate_KCAL(age,kg,height);
  }
  else{
    alert('age > 0 && kg > 0 && height > 0');
  }
}

function BMI_Calculator_TEXT(kg,height){
  let BMI_TEXT=" ";
  let BMI_INFO=" ";
  let BMI_TEXT_color=" ";
  var BMI = 10000*(kg/Math.pow(height,2));

      if(BMI>40){
        BMI_TEXT= 'extreme obesity';BMI_TEXT_color='red'}
      else if(BMI>35){
        BMI_TEXT= 'II degree of obesity';BMI_TEXT_color='red'}
      else if(BMI>30){
        BMI_TEXT= 'I degree of obesity';BMI_TEXT_color='orange'}
      else if(BMI>25){
        BMI_TEXT= 'overweight';BMI_TEXT_color='yellow'}
      else if(BMI>18.5){
        BMI_TEXT= 'correct value';BMI_TEXT_color='green'}
      else if(BMI>17){
        BMI_TEXT= 'underweight';BMI_TEXT_color='blue'}
      else if(BMI>16){
        BMI_TEXT= 'emaciation';BMI_TEXT_color='grey'}
      else{
        BMI_TEXT= 'starvation';BMI_TEXT_color='grey'}


        if (BMI >= 25) {
          BMI_INFO= 'Your BMI is too big!';
        } else if (BMI > 18.5) {
          BMI_INFO= 'Your BMI is normal!';
        } else {
          BMI_INFO= 'Your BMI is too low!';
        }

        text_BMI_.innerHTML = `BMI : ${BMI.toFixed(2)}`;
        text_BODY_.innerHTML = `Body : ${BMI_TEXT}`;
        text_INFO_.innerHTML = `Info : ${BMI_INFO}`;
        hr_bmi.style.background=BMI_TEXT_color;
}

function calculate_KCAL(age,kg,height){
  var _kcal;
    if(gender=="I'm a man"){
      _kcal = 66.47+(13.75*kg)+(5*height)-(6.75*age);
    }
    else{
      _kcal = 665.09+(9.56*kg)+(1.85*height)-(4.67*age);
    }
    console.log(gender);
    text_KCAL_.innerHTML = `Kcal : ${_kcal.toFixed(0)}`;
}

var gender = Gender_.innerText ;
var element = document.body;
Gender_.onclick = function(){
  if(Gender_.textContent=="I'm a man"){
    element.className = "woman-mode";
  Gender_.innerText = "I'm a woman";
  }
  else{
    element.className = "man-mode";
    Gender_.innerText = "I'm a man";
  }
  gender=Gender_.innerText 
}

function clear_btn(){
  document.getElementById('age').value = "";
  document.getElementById('kg').value = "";
  document.getElementById('height').value = "";
}