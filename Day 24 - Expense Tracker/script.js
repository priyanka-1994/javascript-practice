const Expense = document.getElementById('TotalExpense');
const listExpense = document.getElementById('listExpense');
const expenses = [];

function addExpense() {
    const Title = document.getElementById('title').value;
    const Price = parseFloat(document.getElementById('price').value);

    if(Title && !isNaN(Price)){
        const time = new Date().toLocaleString();
        expenses.push({Title,Price,time});
        
        const li = document.createElement('li');
        li.textContent = `${Title} - ₹${Price} (Added on ${time})`;        
        listExpense.appendChild(li);
        const total = expenses.reduce((acc, item) => acc + item.Price, 0);
        Expense.textContent = `Total: ₹${total}`;
    }
    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
}
function clearExpenses(){
    expenses.length = 0;
    listExpense.innerHTML = "";
    Expense.textContent = "Total: ₹0";
}
