// <-------------------------------------- Log Out --------------------------------------->

document.getElementById('log-out-btn').addEventListener('click', function () {
    window.location.href = './index.html'
})

// <-------------------------------------- Cash OUt  --------------------------------------->

document.getElementById('btn-cash-out').addEventListener('click' , function(event) {
    event.preventDefault() ;
    
    const cashOut = document.getElementById('input-cash-out').value ; 
    
    if(isNaN(cashOut) || cashOut <= 0 ){

        document.getElementById('input-cash-out').value = ""; 

        document.getElementById('input-pin').value = "" ;

        return alert('Invalid Number')
    }

    const cashOutNumber = parseFloat(cashOut) ; 

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
   

    if(cashOutNumber > accountBalanceNumber ){

        document.getElementById('input-cash-out').value = ""; 

        document.getElementById('input-pin').value = "";

        return alert('Insufficient Balance') ;
    }

    const pinNumber = document.getElementById('input-pin-2').value ;

    if(pinNumber === '1234'){

        const updatedBalance = accountBalanceNumber - cashOutNumber ;
        console.log(updatedBalance)

        document.getElementById('account-balance').innerText = updatedBalance ;

        document.getElementById('input-cash-out').value = ""; 

        document.getElementById('input-pin').value = "" ;
    } else{return alert('Incorrect Pin')}
})
