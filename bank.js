function inputAmount(inputId,currentMoney,totalBalance,isAdd){
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

    inputAmount('deposit-input','deposit-money','total-money',true);

    // const depositInput = document.getElementById('deposit-input')
    // const depositInputValue = parseFloat(depositInput.value);
    // const depositMoney = document.getElementById('deposit-money')
    // const previousDepositMoney = parseFloat(depositMoney.innerText);   
    // const newDepositMoney = previousDepositMoney + depositInputValue;
    // depositMoney.innerText = newDepositMoney;
    // depositInput.value = '';
   
    //  update balance 

    // const totalMoney = document.getElementById('total-money');
    // const previousMoneyInputValue = parseFloat(totalMoney.innerText);
    // const newTotalMoney = previousMoneyInputValue + depositInputValue;
    // totalMoney.innerText = newTotalMoney;
})



// WIthdraw money 

const withdrawButton = document.getElementById('withdraw-btn');

withdrawButton.addEventListener('click', function(){ 

    const totalMoney = document.getElementById('total-money');
    const previousMoneyInputValue = parseFloat(totalMoney.innerText);
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputValue = parseFloat(withdrawInput.value);
    const alertMessage = document.getElementById('alert-message');

    if(withdrawInputValue > 0 && withdrawInputValue < previousMoneyInputValue){
        inputAmount('withdraw-input','withdraw-money','total-money');
        alertMessage.innerText = 'Withdraw Successful';
        alertMessage.style.backgroundColor = 'green';
        alertMessage.style.color = 'white';
        alertMessage.style.display = 'block';
    }
    else{
        alertMessage.innerText = 'Not Enough Money or Enter a positive value';
        alertMessage.style.display = 'block';
        alertMessage.style.backgroundColor = 'red';
        
    }
    

    // const withdrawInput = document.getElementById('withdraw-input')
    // const withdrawInputValue = parseFloat(withdrawInput.value);
    // const withdrawMoney = document.getElementById('withdraw-money')
    // const previousWithdrawMoney = parseFloat(withdrawMoney.innerText);   
    // const newWithdrawMoney = previousWithdrawMoney + withdrawInputValue;
    // withdrawMoney.innerText = newWithdrawMoney;
    // withdrawInput.value = '';

     //  update balance 

    //  const totalMoney = document.getElementById('total-money');
    //  const previousMoneyInputValue = parseFloat(totalMoney.innerText);
    //  const newTotalMoney = previousMoneyInputValue - withdrawInputValue;
    //  totalMoney.innerText = newTotalMoney;
    
})