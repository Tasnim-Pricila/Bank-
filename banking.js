function inputValues(inputId){
    const input = document.getElementById(inputId)
    const inputValue = parseFloat(input.value);
    return inputValue;
}
function totalMoney(text){
    const money = document.getElementById(text)
    const previousMoney = parseFloat(money.innerText); 
    return previousMoney;
}

function fullTransaction(inputId,currentMoney,totalBalance,isAdd){
    const input = document.getElementById(inputId)
    const inputValue = parseFloat(input.value);
    const money = document.getElementById(currentMoney)
    const previousMoney = parseFloat(money.innerText);   
    const updatedMoney = previousMoney + inputValue;
    money.innerText = updatedMoney;
    input.value='';

    //  update balance 

    const totalMoney = document.getElementById(totalBalance);
    const previousMoneyInputValue = parseFloat(totalMoney.innerText);
    if(isAdd == true){
        const newTotalMoney = previousMoneyInputValue + inputValue;
        totalMoney.innerText = newTotalMoney;
    }
    else{
        const newTotalMoney = previousMoneyInputValue - inputValue;
        totalMoney.innerText = newTotalMoney;
    }
   
}


// Deposit Money 
const depositButton = document.getElementById('deposit-btn');

depositButton.addEventListener('click', function(){
    const depositInputValue = inputValues('deposit-input');
    const alertMessage = document.getElementById('deposit-alert-message');

    if(depositInputValue > 0){
        fullTransaction('deposit-input','deposit-money','total-money',true);
        alertMessage.innerText = 'Money Deposit Successfully';
        alertMessage.style.backgroundColor = 'green';
        alertMessage.style.color = 'white';
        alertMessage.style.display = 'block';
    }  
    else{
        alertMessage.innerText = 'Enter a positive value';
        alertMessage.style.display = 'block';
        alertMessage.style.backgroundColor = 'red';
    } 
})


// WIthdraw money 

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function(){ 

    const withdrawInputValue = inputValues('withdraw-input');
    const totalBalance = totalMoney('total-money');

    const alertMessage = document.getElementById('withdraw-alert-message');

    if(withdrawInputValue > 0 && withdrawInputValue < totalBalance){
        fullTransaction('withdraw-input','withdraw-money','total-money');
        alertMessage.innerText = 'Money Withdraw Successfully';
        alertMessage.style.backgroundColor = 'green';
        alertMessage.style.color = 'white';
        alertMessage.style.display = 'block';
    }
    else{
        alertMessage.innerText = 'Not Enough Money or Enter a positive value';
        alertMessage.style.display = 'block';
        alertMessage.style.backgroundColor = 'red';
        
    }
})