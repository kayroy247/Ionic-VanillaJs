const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertController = document.querySelector('ion-alert-controller')

let totalExpenses = 0;
const clear = () => {
    reasonAmount.value = '';
    reasonInput.value = '';
}
confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = reasonAmount.value;

    if(enteredReason.trim().length <=0 ||
       enteredAmount <= 0 || 
       enteredAmount.trim().length <1){
           alertController.create({ message: 'Please enter valid reason',
        header: 'Invalid Inputs',
        buttons: ['Okay']
    }).then(alertElement => alertElement.present())
           return;
       }
       const newItem = document.createElement('ion-item');
       newItem.textContent = enteredReason + ': $' +enteredAmount;
       expensesList.appendChild(newItem);

       totalExpenses += +enteredAmount
       totalExpensesOutput.textContent = totalExpenses;
       clear();
    });

    cancelBtn.addEventListener('click', clear);

