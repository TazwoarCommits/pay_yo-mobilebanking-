document.getElementById('btn-login').addEventListener('click' , function(event){
    event.preventDefault();

  const phoneNumber = document.getElementById('phone-number').value ;
  const pinNumber = document.getElementById('pin').value ; 

  if(phoneNumber === '5' && pinNumber === '1234' ){
     window.location.href = './home.html'
  }
  else{alert('Wrong Phone OR Pin NUumber')}
  document.getElementById('phone-number').value = '' ;
  document.getElementById('pin').value = '' ;
})