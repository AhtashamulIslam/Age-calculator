// let inputArea = document.getElementById('input-area')
// 
const presentDate = new Date()
const presentYear = presentDate.getFullYear()
const presentMonth =1+ presentDate.getMonth()
const presentDay = presentDate.getDate()
let years=document.getElementById('calcyear')
let months=document.getElementById('calcmonth')
let days=document.getElementById('calcday')
let dateArr=[presentYear,presentMonth,presentDay]
let givendateArrUser=[]
const inputField=document.querySelectorAll('input')
const dateInput = document.querySelector('#din')
const monthInput = document.querySelector('#min')
const yearInput = document.querySelector('#yin')
let isValid=true
const calculateAge = document.querySelector('#press')

calculateAge.addEventListener('click',function(e){
    e.preventDefault()
    validateAge()
})
 
 function validateAge(){
     if(dateInput.value.trim()==='' || dateInput.value.trim()==='DD'){
        
         setError(dateInput,'This field is required')

         isValid=false
     }else if(Number(dateInput.value.trim())<1 || Number(dateInput.value.trim())>31 || isNaN(Number(dateInput.value.trim()))){
         setError(dateInput,'Must be valid day')
         isValid=false
     }else{
          
         givendateArrUser.push(Number(dateInput.value.trim()))
        
     }
     if(monthInput.value.trim()==='' || monthInput.value.trim()==='MM'){
         setError(monthInput,'This field is required')
         isValid=false
     }else if(Number(monthInput.value.trim())<1 || Number(monthInput.value.trim())>12 || isNaN(Number(monthInput.value.trim()))){
         setError(monthInput,'Must be valid month')
         isValid=false
     }else{
         givendateArrUser.push(Number(monthInput.value.trim()))
     }
     if(yearInput.value.trim()==='' || yearInput.value.trim()==='YYYY'){
         setError(yearInput,'This field is required')
         isValid=false
     }else if(Number(yearInput.value.trim())<0 || Number(yearInput.value.trim())>presentYear || isNaN(Number(yearInput.value.trim()))){
         setError(yearInput,'Must be valid year')
         isValid=false
     }else{
         givendateArrUser.push(Number(yearInput.value.trim()))
     }
     if(isValid){
                 givendateArrUser.reverse()
                let finalResult=getYMD(dateArr,givendateArrUser)
                years.innerHTML=finalResult.years
                months.innerHTML=finalResult.months
                days.innerHTML=finalResult.days
                 clearField()
                 }else{
                     setDefaultInputStyle(dateInput)
                     setDefaultInputStyle(monthInput)
                     setDefaultInputStyle(yearInput)
                 }
                
 }
function setError(element,errorMessage){
      const parent=element.parentElement
      parent.classList.add('error')
      const smallErrorMessage=parent.querySelector('small')
      smallErrorMessage.textContent=errorMessage
}
function setDefaultInputStyle(element){
     const parent=element.parentElement
      parent.classList.add('error')
}


function getYMD(date1, date2) {
    const a = moment(date1);
    const b = moment(date2);
    var years = a.diff(b, 'year');
    b.add(years, 'years');

    const noOfDaysInb = b.daysInMonth();
    const noOfDaysIna = a.daysInMonth();
    let months = 0;
    if (noOfDaysInb > noOfDaysIna) {
        months = b.diff(a, "months");
        a.add(months, "months");
    } else {
        months = a.diff(b, 'months');
        b.add(months, 'months');
    }
    var days = a.diff(b, 'days');
    return {
        years: Math.abs(years),
        months: Math.abs(months),
        days: Math.abs(days),
    }
}

function clearField(){
   dateInput.value='DD'
   monthInput.value='MM'
   yearInput.value='YYYY'
    givendateArrUser=[]
}










