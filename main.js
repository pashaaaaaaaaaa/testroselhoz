taxValue = 0.062
let incomeinpt = document.querySelector('#income');
let totalinpt = document.querySelector('#total');

function deposit(slayder)
{
    let depositinpt = document.querySelector('#deposit');
    console.log(depositinpt
        )
    depositinpt.value = slayder.value;
    calc(+depositinpt.value);
}
function calc(depositinpt){
    const income = depositinpt * taxValue;
    
    const total = depositinpt + income;
    incomeinpt.innerText =`${income} рублей`;
    totalinpt.innerText = `${total} рублей`;
}



function send(target){

    const formData = new FormData(target.parentElement)

    
  
    const userInfo = {
        firstName:formData.get('firstname'),
        lastName: formData.get('lastname'),
        patronymic: formData.get('patronymic'), 
        birthday : formData.get('birth'),
        mobileNumber : formData.get('tel'),
    }
    console.log(userInfo)


}

let btnYear = document.querySelector('.btn2')
let btnYear2 = document.querySelector('.btn1')

btnYear2.addEventListener('click', ()=>{
    let taxValue2 = document.querySelector('.tax');
    let depositinpt = document.querySelector('#deposit');

    taxValue = 0.062;
    taxValue2.innerText = "6.20%";
    calc(+depositinpt.value)

})



btnYear.addEventListener('click', ()=>{
    // btnYear.style.border = '0.5px solid green'
    // btnYear.style.color = 'green'
    let taxValue2 = document.querySelector('.tax');
    let depositinpt = document.querySelector('#deposit');

    taxValue = 0.0675;
    taxValue2.innerText = "6.75%";
    calc(+depositinpt.value)
    
})
