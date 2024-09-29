// <--------------------------------------Log out --------------------------------------->

document.getElementById('log-out-btn').addEventListener('click', function () {
    window.location.href = './index.html'
})

// <-------------------------------------- Add Money --------------------------------------->

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;

    if (isNaN(addMoney) || addMoney <= 0) {

        document.getElementById('input-cash-out').value = ""; 

        document.getElementById('input-pin').value = "" ;
        
        return alert('Invalid Number');
    }

    const addMoneyNumber = parseFloat(addMoney);



    const pinNumber = document.getElementById('input-pin').value;

    if (pinNumber === '1234') {
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);

        const updatedBalance = accountBalanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = updatedBalance ;

        document.getElementById('input-add-money').value = ""; 

        document.getElementById('input-pin').value = "" ;

    } else{return alert('Incorrect Pin')}
})