// <----------------needed elements as global variable -------------------->

const addMoneyTab = document.getElementById('add-money-tab') ; 
const cashOutTab = document.getElementById('cash-out-tab');
const addMoneySection = document.getElementById('add-money-section');
const cashOutSection = document.getElementById('cash-out-section');

// <------------------------- Tab events -------------------->

addMoneyTab.addEventListener('click' , function() {
    addMoneyTab.classList.remove('bg-cyan-200') ;
    addMoneyTab.classList.add('bg-purple-400') ;

    cashOutTab.classList.remove('bg-purple-400')
    cashOutTab.classList.add('bg-cyan-200')

    addMoneySection.classList.remove('hidden') ;
    cashOutSection.classList.add('hidden')
})

cashOutTab.addEventListener('click' , function(){
    cashOutTab.classList.remove('bg-cyan-200') ; 
    cashOutTab.classList.add('bg-purple-400') ;

    addMoneyTab.classList.remove('bg-purple-400') ;
    addMoneyTab.classList.add('bg-cyan-200') ;

    cashOutSection.classList.remove('hidden') ;
    addMoneySection.classList.add('hidden') ;
})

